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
                      <v-text-field label="University" v-model="message" type="university">
                      </v-text-field>
                    </v-form>
                  </v-card-text>
                   <div class="file-upload-form">
                    Upload logo:
                    <input type="file" @change="previewLogo" accept="image/*">
                  </div>
                  <div class="image-preview" v-if="imageLogo.length > 0">
                    <img class="preview" :src="imageLogo">
                  </div>
                  <v-card-text>
                    <v-form ref="form">
                      <v-text-field label="Certificate Name" v-model="message" type="certificate">
                      </v-text-field>
                      <v-text-field label="Description" v-model="message" type="distinction">
                      </v-text-field>
                    </v-form>
                  </v-card-text>
                  <div class="file-upload-form">
                    Upload certificate:
                    <input type="file" @change="previewCertificate" accept="image/*">
                  </div>
                  <div class="file-upload-form margin-2">
                    Upload Sign:
                    <input type="file" @change="previewSign" accept="image/*">
                  </div>
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
    imageLogo: '',
    imageCertificate: '',
    imageSign: ''
  }),
  methods: {
    previewLogo: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.imageLogo = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    previewCertificate: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.imageCertificate = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    previewSign: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.imageSign = e.target.result
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
