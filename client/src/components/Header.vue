<template>
  <v-toolbar
    :class="{transparent: !showNavbar, 'fade-enter-active': showNavbar}"
    height="80"
    flat
    fixed>
    <v-toolbar-title
      class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
      <img
        src="static/img/logosolo.png"
        height="50">
      </span>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Query Certificates
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        flat
        v-if="!$store.state.isUserLoggedIn"
        :class="{'white--text': !showNavbar}"
        @click="navigateTo({name: 'login'})">
        Log In
      </v-btn>
      <v-btn
        flat
        v-if="!$store.state.isUserLoggedIn"
        :class="{'white--text': !showNavbar}"
        @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
      <v-btn
        flat
        v-if="$store.state.isUserLoggedIn"
        @click="logout">
        Log out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      showNavbar: true
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    },
    handleScroll (event) {
      window.pageYOffset > 80 ? this.showNavbar = true : this.showNavbar = false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
  vertical-align: bottom;
}

.fade-enter-active {
  transition: all 0.5s;
}
.fade-leave-active {
 transition: all 2s;
}

</style>
