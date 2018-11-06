<template>
  <v-app class="bg">
    <v-content>
       <div class="margin">
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <v-flex xs5 sm18 md6>
                <v-card class="elevation-8">
                  <v-toolbar flat dark color="primary">
                    <v-toolbar-title class="title">Enter the information</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-form ref="form">
                      <v-text-field
                        label="Issuer Name"
                        v-model="config.issuerName">
                      </v-text-field>
                      <div class="file-upload-form">
                        Upload Issuer Logo:
                        <input type="file" @change="previewLogo" accept="image/*">
                      </div>
                      <div class="image-preview" v-if="config.issuerImage.length > 0">
                        <img class="preview" :src="config.issuerImage">
                      </div>
                      <v-text-field
                        label="Certificate Title"
                        v-model="config.certificateTitle">
                      </v-text-field>
                      <v-text-field
                        label="Description"
                        v-model="config.certificateDescription">
                      </v-text-field>
                      <div class="file-upload-form margin-2">
                        Upload Signature Image:
                        <input type="file" @change="previewSignature" accept="image/*">
                      </div>
                      <div class="image-preview" v-if="config.issuerSignatureLines[0].image.length > 0">
                        <img class="preview" :src="config.issuerSignatureLines[0].image">
                      </div>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      flat
                      class="primary"
                      @click="newTemplate">Enter</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          </div>
    </v-content>
  </v-app>
</template>

<script>
const bcTools = require('blockcert-tools-js')
export default {
  data: () => ({
    config: {
      // certificate display
      displayHtml: '',
      // recipient info
      hashEmails: false,
      // issuer info
      issuerUrl: 'https://www.issuer.org',
      issuerEmail: 'contact@issuer.org',
      issuerName: 'Universidad del Centro',
      issuerId: 'https://raw.githubusercontent.com/PanacertProject/BlockcertExamples/master/issuers/universidad-del-centro/issuer.json',
      revocationList: 'https://raw.githubusercontent.com/PanacertProject/BlockcertExamples/master/issuers/universidad-del-centro/revocation-list.json',
      issuerSignatureLines: [{jobTitle: 'University Issuer', image: '', name: 'Universidad del Centro'}],
      issuerPublicKey: 'Cfd720Ada81563D36E53eF2904F5A9E87fD0a29c',
      issuerImage: '',
      // certificate info
      certificateTitle: 'Certificate of Accomplishment',
      certificateDescription: 'Lorem ipsum dolor sit amet, mei docendi concludaturque ad, cu nec partem graece. Est aperiam consetetur cu, expetenda moderatius neglegentur ei nam, suas dolor laudem eam an.',
      criteriaNarrative: 'Nibh iriure ei nam, modo ridens neglegentur mel eu. At his cibo mucius.',
      badgeId: '82a4c9f2-3588-457b-80ea-da645ac1b8cc',
      certImage: ''
    }
  }),
  methods: {
    previewLogo: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.config.issuerImage = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    previewSignature: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.config.issuerSignatureLines[0].image = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    newTemplate: function () {
      var template = bcTools.generateTemplate(this.config)
      this.$store.dispatch('setCertificateTemplate', template)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  background-image: url('../../static/img/puppies.jpg');
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 140%;
}
.file-upload-form, .image-preview {
    padding: 1rem;
    color: black;
    background-color: #EBF5FB;
    text-align: center;
    font-weight: bold;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 5px;
}
img.preview {
    width: 200px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
}
.title{
  text-align: center;
    padding: 20px
}
.margin{margin-top:75px;}
.margin-2{margin-top:15px;}
</style>
