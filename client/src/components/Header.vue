<template>
  <v-toolbar fixed class="indigo darken-1" dark>
    <v-toolbar-title class="mr-4">
      <span
      class="home"
      @click="navigateTo({name: 'root'})">
      Panacea
      </span>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Query Certificates
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark
      @click="navigateTo({name: 'login'})">
        Log In
      </v-btn>
      <v-btn flat dark
      @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
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

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: rgb(59, 235, 191)
}
</style>
