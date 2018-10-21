<template>
  <v-parallax src="static/img/santiagopic.jpg">
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                autocomplete="off">
                <div class="error" v-html="error"/>
                <br>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="E-mail"
                      v-model="email"
                      type="email"
                      :rules="emailRules"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Password"
                      v-model="password"
                      type="password"
                      :rules="passwordRules"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Confirm Password"
                      v-model="ConfirmPassword"
                      type="password"
                      :rules="[comparePasswords]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn
                      class="primary"
                      flat
                      @click="register">
                      Register
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-parallax>
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
  computed: {
    comparePasswords () {
      return this.password !== this.ConfirmPassword ? 'Passwords do not match' : true
    }
  },
  methods: {
    async register () {
      if (this.$refs.form.validate()) {
        try {
          const response = await AuthenticationService.register({
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
</style>
