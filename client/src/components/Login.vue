<template>
  <v-app class="bg">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar flat dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form">
                  <div class="error" v-html="error"/>
                  <v-text-field
                    prepend-icon="email"
                    label="E-mail"
                    v-model="email"
                    type="email"
                    :rules="emailRules">
                  </v-text-field>
                  <v-text-field
                    prepend-icon="lock"
                    label="Password"
                    v-model="password"
                    type="password"
                    :rules="passwordRules">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  flat
                  class="primary"
                  @click="login">
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      ConfirmPassword: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      error: null
    }
  },
  methods: {
    async login () {
      if (this.$refs.form.validate()) {
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        } catch (err) {
          this.error = err.response.data.error
        }
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
  background-image: url('../../static/img/santiagopic.jpg');
  background-size: 100%;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
