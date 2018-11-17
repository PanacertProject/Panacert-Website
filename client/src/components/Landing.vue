<template>
  <v-content>
    <section>
      <v-responsive
        class="banner"
        :aspect-ratio="3/2"
        max-height="1000"
        fill-height>
        <v-container
          fill-height>
          <v-layout
            justify-center
            align-center
            class="my-3">
            <v-flex
              xs12
              sm4>
              <v-img
                src="static/img/logo2.png">
              </v-img>
              <div>
                <h2
                  class="mb-3 text-xs-center white--text">
                  Verifiable Digital Certificates
                </h2>
              </div>
              <v-card
                class="transparent"
                flat>
                <v-btn
                  class="btn"
                  flat
                  @click="navigateTo({ name: 'register' })">
                  Get Started
                </v-btn>
                <v-btn
                  class="btn"
                  flat
                  @click="navigateTo({ name: 'verifycerts' })">
                  Verify now
                </v-btn>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-responsive>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center>
        <v-flex
          xs12
          sm4
          class="my-3">
          <div
            class="text-xs-center">
            <h2
              class="headline">The best way to prove you're certified
            </h2>
            <span
              class="subheading">
              It's Never been easier
            </span>
          </div>
        </v-flex>
        <v-layout
          row
          wrap
          align-center
          class="my-4">
          <v-flex
            class="item box">
            <v-card
              class="elevation-0 transparent">
              <v-icon
                x-large
                class="black--text">
                card_travel
              </v-icon>
              <v-card-title
                primary-title
                class="layout justify-center black--text">
                <div
                  class="headline text-xs-center">
                  COMPANY
                </div>
              </v-card-title>
              <v-card-text
                class="black--text">
                Easily verify digital certificates online.
                We are dedicaded to improving the chances your company will hire qualified people,
                in a faster, cheaper and simpler way.
              </v-card-text>
              <v-btn
                class='btn'
                large
                flat
                @click="navigateTo({ name: 'empresas' })">
                See more
              </v-btn>
            </v-card>
          </v-flex>
          <v-flex
            class="item box row">
            <v-card
              class="elevation-0 transparent">
              <v-icon
                x-large
                class="black--text">
                account_balance
              </v-icon>
              <v-card-title
                primary-title
                class="layout justify-center black--text">
                <div
                  class="headline">
                  ISSUERS
                </div>
              </v-card-title>
              <v-card-text
                class="black--text">
                Issue digital verifiable certificates today.
                Learn about blockcerts, the future of digital certificates.
                View our open source code and more.
              </v-card-text>
              <v-btn
                class="btn"
                large
                flat
                @click="navigateTo({ name: 'universidad' })">
                See more
              </v-btn>
            </v-card>
          </v-flex>
          <v-flex
            class="item box">
            <v-card
              class="elevation-0 transparent">
              <v-icon
                x-large
                class="black--text">
                accessibility_new
              </v-icon>
              <v-card-title
                primary-title
                class="layout justify-center black--text">
                <div
                  class="headline text-xs-center">
                  STUDENTS
                </div>
              </v-card-title>
              <v-card-text
                class="black--text">
                We free you of the long and tedious processes involved with managing physical certificates,
                allowing you to have your official certificates digitally at your reach anytime, anywhere.
              </v-card-text>
              <v-btn
                class="btn"
                large
                flat
                @click="navigateTo({ name: 'persona' })">
                See more
              </v-btn>
            </v-card>
          </v-flex>
        </v-layout>
      </v-layout>
    </section>

    <!-- <section>
      <v-responsive src="./static/img/santiagopic.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Certificate management has never been easier</div>
          <em>Get your digital certificates today</em>
          <v-btn
            class="btn"
            dark
            large
            @click="navigateTo({ name: 'register'})">
            Get Started
          </v-btn>
        </v-layout>
      </v-responsive>
      <br>
    </section> -->

    <section>
      <v-container
        grid-list-xl>
        <v-layout
          row
          wrap
          justify-center
          class="my-5">
          <v-flex
            xs12
            sm4>
            <v-card
              class="elevation-0 transparent">
              <v-card-title
                primary-title
                class="layout justify-center">
                <div
                  class="headline">
                  Company info
                </div>
              </v-card-title>
              <v-card-text>
                PANACERT is a project of PANACEA group wich are every day developing tools
                for your benefits. We work to make the world safer, simpler and better.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex
            xs12
            sm4
            offset-sm1>
            <v-card
              class="elevation-0 transparent">
              <v-card-title
                primary-title
                class="layout justify-center">
                <div
                  class="headline">
                  Contact us
                </div>
              </v-card-title>
              <v-card-text>
                If you want to know more about how PANACERT works, upcoming products
                or send us feedback about the features of the app just contact us.
              </v-card-text>
              <v-list
                class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon
                      class="primary--text">
                      phone
                    </v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      +56 9 1234 5678
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon
                      class="primary--text">
                      place
                    </v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Santiago, CL
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon
                      class="primary--text">
                      email
                    </v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      contact@panacert.com
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <v-footer
      class="primary darken-1">
      <v-layout
        row
        wrap
        align-center>
        <v-flex
          xs12>
          <div
            class="white--text ml-3">
            @Panacert Project - 2018
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
.btn {
  border-radius: 30px 30px 30px 30px;
  border: 2px solid ;
  border-color: rgb(4, 196, 255);
  width: 160px;
  height: 60px;
  color: white;
  background-color: rgb(15, 136, 173);
  /* opacity: 0.75; */
}
/* .btn:active {
  background: transparent;
} */
.box {
  border: 2px solid ;
  border-color: rgb(4, 196, 255);
  background-color: rgb(255, 255, 255);
  opacity: 0.8;
}

.item {
  padding: 30px;
  text-justify: auto;
  text-align: center;
  background:rgba(255, 255, 255, 0.801);
  width:320px;
  height:400px;
  margin:1px 5px 5px 1px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.664);
  transition:box-shadow 1s, transform 150ms, filter 500ms ease-in-out;
}
.item:hover {
  transform: scale(1.05);
  box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.6);
}
.item .blur {
  filter: blur(3px);
  transform: scale(0.95);
}
.banner {
  background-size: fill;
  background-image: url(/static/img/nicepic.jpg);
  background-attachment: fixed;
}
</style>
