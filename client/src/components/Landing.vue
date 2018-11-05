<template>
  <v-content>
    <section>
      <v-parallax src="./static/img/nicepic.jpg" height="600" class="ima">
        <v-layout
          column
          align-center
          justify-center
          class="white--text">
          <img src="static/img/logo2.png" height="120">
          <div class="subheading mb-3 text-xs-center">Powered by Blockcerts</div>
          <v-card color="transparent" flat>
              <v-btn
                class='primary'
                large
                @click="navigateTo({ name: 'register' })">
                Get Started
              </v-btn>
              <v-btn
                class='secondary'
                large
                @click="navigateTo({ name: 'verifycerts' })">
                Verify now
              </v-btn>
          </v-card>
          <br>
          <v-card color="transparent" flat>
            <img src="static/img/AppleStore.png" height="38">
            <img src="static/img/GooglePlay.png" height="38">
          </v-card>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">The best way to prove you're certified</h2>
            <span class="subheading">
              Never be easier
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row align-center>

              <article class="item">
              <v-flex xs12 md4 >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="primary--text">share</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Share with Anyone</div>
                  </v-card-title>
                  <v-card-text>
                    Share your certificate profile by PANACERT for your applications to work place
                    or benefits, this you will manage your certificates wherever you want in a safer
                    and faster way
                  </v-card-text>
                </v-card>
              </v-flex>
              </article>

              <article class="item">
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="primary--text">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Fast Validation</div>
                  </v-card-title>
                  <v-card-text>
                    Validate your academic certificate with your educational institution through PANACER,
                    this you will avoid those long bureaucratic processes that will cost you a huge amout
                    of money and time in a easier and official way
                  </v-card-text>
                </v-card>
              </v-flex>
              </article>

              <article class="item">
              <v-flex xs12 md4 id="hola">
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="primary--text">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Completely Open Sourced</div>
                  </v-card-title>
                  <v-card-text>
                    Know about the huge tools with which PANACERT could work in his development with
                    our completly open sourced code, about our collaboration with Blockcerts and how
                    does we manage Blockchain for yours benefits.
                  </v-card-text>
                </v-card>
              </v-flex>
              </article>

            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="./static/img/santiagopic.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Certificate management has never been easier</div>
          <em>Get your digital certificates today</em>
          <v-btn
            class="primary"
            dark
            large
            @click="navigateTo({ name: 'register'})">
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                PANACERT is a proyect of PANACEA group wich are every day developing tools
                for your benefits. We work to make the world saffer, easier and better.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                If you want to know more about how does it work PANACERT, upcoming product
                or send us feedback about the features of the app just write us.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>+56 9 1234 5678</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Santiago, CH</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>contact@panacert.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <v-footer class="primary darken-1">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            @Panacea Project - 2018
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-content>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nombresclase {
  color: #FFFFFF;
}
.nombreclase .otraclase {
  color: #444444;
}
.otraclase {
  color: #000000;
}
.item{
padding:5px;
background:#FFF;
width:200px;
height:300px;
margin:0 5px 5px 0;
float: left;
box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
transition:box-shadow 1s, transform 500ms, filter 500ms ease-in-out;
}
article.item:hover{
transform: scale(1.05);
box-shadow: 3px 3px 10px rgba(0,0,0,0.6);
}
article.blur{
filter: blur(3px);
transform: scale(0.95);
}
</style>
