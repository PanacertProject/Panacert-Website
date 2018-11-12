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
                <div>
                  <h4>Use the following format:</h4>
                  <p>name, email</p>
                </div>
                <div>
                  <ul>
                    <li v-if="certs.length > 0" v-for="cert in certs">{{cert}}</li>
                  </ul>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  flat
                  class="primary"
                  :disabled="isEmittingCertificates"
                  :loading="isEmittingCertificates"
                  @click="newCertificateBatch">
                  Enter
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-dialog
        v-model="isEmittingCertificates"
        hide-overlay
        persistent
        width="300">
        <v-card
          color="primary"
          dark>
          <v-card-text>
            Please stand by
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0">
            </v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-content>
  </v-app>
</template>

<script>
import CertificateIssuingService from '@/services/CertificateIssuingService'
import {GetBlockcertUrl} from '@/services/Api'
const Papa = require('papaparse')
const bcTools = require('blockcert-tools-js')
const uuidv4 = require('uuid/v4')

export default {
  data: () => ({
    roster: [],
    isEmittingCertificates: false,
    certs: []
  }),
  methods: {
    updateRoster (event) { // leaves roster array ready
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
                  uid: uuidv4()
                }
              })
            }
          }
        })
      }
    },
    async newCertificateBatch () {
      if (!this.$store.state.certificateTemplate) {
        throw Error('certificate template not set')
      } else if (!this.roster) {
        throw Error('undefined roster')
      } else {
        this.isEmittingCertificates = true
        var batch = bcTools.instantiateBatch(this.$store.state.certificateTemplate, this.roster)
        console.log({unsignedCertificates: batch})
        var response = await CertificateIssuingService.issue({unsignedCertificates: batch})
        if (response.data.success) {
          var batchLength = batch.length
          for (let i = 0; i < batchLength; i++) {
            this.certs.push('Certificate ' + (i + 1) + ': ' + GetBlockcertUrl + batch[i].id.slice(9) + '.json')
          }
          console.log(response)
        }
        this.isEmittingCertificates = false
      }
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
.title {
  text-align: center;
  padding: 20px;
}
.margin {
  margin-top: 75px;
}

.margin-2 {
  margin-top: 15px;
}
</style>
