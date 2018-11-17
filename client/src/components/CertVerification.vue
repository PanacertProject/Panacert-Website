<template>
  <v-content>
    <v-responsive
      class="bg"
      :aspect-ratio="3/2"
      height="1000">
      <v-container
        fluid
        fill-height>
        <v-layout
          align-center
          justify-center>
          <v-flex
            xs12
            sm8
            md4>
            <h2
              class="verify-header">
              Verify Your Certificate
            </h2>
            <v-spacer></v-spacer>
            <blockcerts-verifier
              disable-auto-verify
              display-mode="full">
            </blockcerts-verifier>
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>
  </v-content>
</template>

<script>
require('@webcomponents/webcomponentsjs/webcomponents-loader.js')
require('@blockcerts/blockcerts-verifier/dist/main.js')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  background-image: url('../../static/img/parapag.png');
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
