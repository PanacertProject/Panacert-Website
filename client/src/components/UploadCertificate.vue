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
                      <v-text-field label="Certificate Name" v-model="message" type="certificate">
                      </v-text-field>
                      <v-text-field label="Year" v-model="message" type="year">
                      </v-text-field>
                      <v-text-field label="Distinction" v-model="message" type="distinction">
                      </v-text-field>
                      <v-text-field label="Identification Badge" v-model="message" type="badge">
                      </v-text-field>
                    </v-form>
                  </v-card-text>
                  <div class="file-upload-form">
                          Upload certificate:
                          <input type="file" @change="previewImage" accept="image/*">
                      </div>
                      <div class="image-preview" v-if="imageData.length > 0">
                          <img class="preview" :src="imageData">
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
    imageData: ''
  }),
  methods: {
    previewImage: function (event) {
      // Reference to the DOM input element
      var input = event.target
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader()
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result
        }
        // Start the reader job - read file as a data url (base64 format)
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
</style>
