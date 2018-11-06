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
                      <div class="error" v-html="error"/>
                      <v-text-field
                        label="Issuer Name"
                        v-model="issuerName">
                      </v-text-field>
                      <div class="file-upload-form">
                        Upload Issuer Logo:
                        <input type="file" @change="previewLogo" accept="image/*">
                      </div>
                      <div class="image-preview" v-if="logoImage.length > 0">
                        <img class="preview" :src="logoImage">
                      </div>
                      <v-text-field
                        label="Certificate Name"
                        v-model="certificateName">
                      </v-text-field>
                      <v-text-field
                        label="Description"
                        v-model="certificateDescription">
                      </v-text-field>
                      <div class="file-upload-form margin-2">
                        Upload Signature Image:
                        <input type="file" @change="previewSignature" accept="image/*">
                      </div>
                      <div class="image-preview" v-if="logoImage.length > 0">
                        <img class="preview" :src="signatureImage">
                      </div>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat class="primary">Enter</v-btn>
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
export default {
  data: () => ({
    logoImage: '',
    signatureImage: '',
    issuerName: '',
    certificateName: '',
    certificateDescription: ''
  }),
  methods: {
    previewLogo: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.logoImage = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    previewSignature: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.signatureImage = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red
}
.bg {
  background-image: url('../../static/img/parapag.png');
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
