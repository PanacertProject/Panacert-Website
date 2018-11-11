<template>
  <v-app class="bg">
    <v-content>
        <v-container class="margin" fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs5 sm18 md6>
              <v-card class="elevation-8">
                <v-toolbar flat dark color="primary">
                  <v-toolbar-title class="title">Create Certificates</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form ref="form">
                    <div class="file-upload-form">
                      Upload Student Roster:
                     <input
                      type="file"
                      accept=".xlsx, .xls, .csv"
                      @change="updateRoster"/>
                    </div>
                  </v-form>
                  <h4>Use the following format:</h4>
                  <p>name, email</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    flat
                    class="primary"
                    @click="newCertificateBatch">
                    Enter
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-content>
  </v-app>
</template>

<script>
const Papa = require('papaparse')
const bcTools = require('blockcert-tools-js')
export default {
  data: () => ({
    roster: []
  }),
  methods: {
    updateRoster: function (event) { // leaves roster array ready
      var input = event.target
      if (input.files && input.files[0]) {
        this.roster = [] // reset roster array
        var today = new Date().toISOString() // create datetime ISO
        Papa.parse(input.files[0], { // parse csv and set roster
          skipEmptyLines: true,
          delimiter: ', ',
          header: true,
          complete: (results) => {
            var rosterLength = results.data.length
            for (let i = 0; i < rosterLength; i++) {
              this.roster.push({
                recipient: {
                  name: results.data[i].name,
                  email: results.data[i].email,
                  pubkey: ''
                },
                certificate: {
                  issuedOn: today,
                  uid: this.fakeGuid()
                }
              })
            }
          }
        })
      }
    },
    newCertificateBatch: function () {
      if (!this.$store.state.certificateTemplate) {
        throw Error('certificate template not set')
      } else if (!this.roster) {
        throw Error('undefined roster')
      } else {
        var batch = bcTools.instantiateBatch(this.$store.state.certificateTemplate, this.roster)
        // TODO emit batch to blockchain
      }
    },
    fakeGuid: function () { // generates a FAKE uuid (doesn't comply with randomness required)
      function s4 () {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  background-image: url('../../static/img/parapag.png');
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 140%;
}
.title{
  text-align: center;
    padding: 20px
}
.margin{margin-top:75px;}
.margin-2{margin-top:15px;}
</style>
