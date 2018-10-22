<template>
  <v-app class="bg">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <h2 class="verify-header">Verify Your Certificate</h2>
            <v-spacer></v-spacer>
            <blockcerts-verifier disable-auto-verify display-mode="full" allow-download allow-social-share></blockcerts-verifier>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
  <!-- <div>
    <div class="verifier">
    <h2>Verify Your Certificate</h2>
      <blockcerts-verifier disable-auto-verify display-mode="full" allow-download allow-social-share></blockcerts-verifier>
    </div>
  </div> -->
</template>

<script>
require('@webcomponents/webcomponentsjs/webcomponents-loader.js')
require('@blockcerts/blockcerts-verifier/dist/main.js')

export default {
  data () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bg {
  background-image: url('../../static/img/santiagopic.jpg');
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
}

.verify-header {
    background-color: #08172E;
    color: #F3F4F5;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
