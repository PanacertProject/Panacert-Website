<template>
  <v-content id="template2">
    <section>
      <v-parallax class="banner" height="600">
        <v-layout
          column
          align-center
          justify-center
          class="white--text">
          <br>
          <br>
          <img src="static/img/logo2.png" height="240">
          <div class="subheading mb-3 text-xs-center">Powered by Blockcerts</div>
          <v-card color="transparent" flat>
              <v-btn
                class ="white--text"
                id = "boton"
                style='width:160px; 
                height:60px'
                @click="navigateTo({ name: 'register' })">
                Get Started
              </v-btn>
              <v-btn
                class ="white--text"
                id = "boton"
                style='width:160px; 
                height:60px'
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
          <br>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row align-center>

              <p class="item" id="boxes">
              <v-flex>
                <v-card class="elevation-0 transparent">
                  <v-card-text>
                    <v-icon x-large class="black--text">card_travel</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center black--text">
                    <div class="headline text-xs-center">COMPANY</div>
                  </v-card-title>
                  <v-card-text class="black--text">
                    Share your certificate profile by PANACERT for your applications to work place
                    or benefits, this you will manage your certificates wherever you want in a safer
                    and faster way
                  </v-card-text>
                  <v-btn class='black--text' id="boton2" large @click="navigateTo({ name: 'register' })">See more</v-btn>
                </v-card>
              </v-flex>
              </p>

              <p class="item" id="boxes">
              <v-flex>
                <v-card class="elevation-0 transparent">
                  <v-card-text >
                    <v-icon x-large class="black--text">account_balance</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center black--text">
                    <div class="headline">UNIVERSITY</div>
                  </v-card-title>
                  <v-card-text class="black--text">
                    Validate your academic certificate with your educational institution through PANACER,
                    this you will avoid those long bureaucratic processes that will cost you a huge amout
                    of money and time in a easier and official way
                  </v-card-text>
                  <v-btn class='black--text' id="boton2"  large @click="navigateTo({ name: 'universidad' })">See more</v-btn>
                </v-card>
              </v-flex>
              </p>

              <p class="item" id="boxes">
              <v-flex>
                <v-card class="elevation-0 transparent">
                  <v-card-text>
                    <v-icon x-large class="black--text">accessibility_new</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center black--text">
                    <div class="headline text-xs-center">PERSON</div>
                  </v-card-title>
                  <v-card-text class="black--text">
                    Know about the huge tools with which PANACERT could work in his development with
                    our completly open sourced code, about our collaboration with Blockcerts and how
                    does we manage Blockchain for yours benefits.
                  </v-card-text>
                  <v-btn class='black-text' id="boton2" large @click="navigateTo({ name: 'register' })">See more</v-btn>
                </v-card>
              </v-flex>
              </p>

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

            id="boton"
            dark
            large
            @click="navigateTo({ name: 'register'})">
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
      <br>
    </section>
    <section class="banner">
    </section>

    <section>
      <v-layout column align-center justify-center color="white">
          <br>
          <br>
          <iframe width="952" height="535.5" src="https://www.youtube.com/embed/5wAyS1e_hOo"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </v-layout>
      <br>
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

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#boton{
   border-radius: 30px 30px 30px 30px;
   border: 2px solid ;
   border-color: rgb(4, 196, 255);
   background: rgb(0, 0, 0);
   opacity: 0.75
}
#boton2{
   border-radius: 30px 30px 30px 30px;
   border: 2px solid ;
   border-color: rgb(4, 196, 255);
   opacity: 1
}

#boxes{
   border: 2px solid ;
   border-color: rgb(4, 196, 255);
   background: rgb(255, 255, 255);
   opacity: 0.8
}
#template2{
  background: white;
}
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
text-justify: auto;
text-align: center;
background:rgba(5, 134, 156, 0.801);
width:320px;
height:400px;
margin:1px 5px 5px 1px;
box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.664);
transition:box-shadow 1s, transform 150ms, filter 500ms ease-in-out;
}
p.item:hover{
transform: scale(1.05);
box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.6);
}
p.blur{
filter: blur(3px);
transform: scale(0.95);
}

.banner{
  background-size: 100%;
  animation-name: banner;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-direction: alternate
}
@keyframes banner {
  0%, 30% {
    background-image: url(/static/img/santiagopic.jpg);
  }
  34%, 66% {
    background-image: url(/static/img/parallax1.jpg);
}
  70%, 100% {
    background-image: url(/static/img/nicepic.jpg);
  }

}






</style>
