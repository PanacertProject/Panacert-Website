<template>
  <v-toolbar fixed class="mainheader" >
    <v-toolbar-title class="mr-4">
      <span
      class="home"
      @click="navigateTo({name: 'root'})">
      <img src="static/img/logo.png" height="35">
      </span>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Query Certificates
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat
      v-if="!$store.state.isUserLoggedIn"
      @click="navigateTo({name: 'login'})">
        Log In
      </v-btn>
      <v-btn flat
      v-if="!$store.state.isUserLoggedIn"
      @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
      <v-btn flat
      v-if="$store.state.isUserLoggedIn"
      @click="logout">
        Log out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style scoped>
.mainheader {
  color: blue
}
.home {
  cursor: pointer;
  vertical-align: bottom;
}
.home:hover {
  color: rgb(59, 235, 191)
}
</style>
