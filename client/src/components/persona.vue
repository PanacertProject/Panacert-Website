<template>
  <v-content class="bg">
    <br>
    <div class="header2">Únete al sistema que está revolucionando la forma de validar certificados.</div>
    <v-card color="transparent" flat>
      <v-btn
        class ="white--text"
        id = "boton"
        style='width:160px;
        height:60px'
        @click="navigateTo({ name: 'CreateTemplate' })">
        Certificar
      </v-btn>
      <v-btn
        class ="white--text"
        id = "boton"
        style='width:160px;
        height:60px'
        @click="navigateTo({ name: 'register' })">
        Soy nuevo
      </v-btn>
    </v-card>
  </v-content>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red
}
.bg {
  background-image: url('../../static/img/uni.jpg');
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 2;
}
.header {
  font-size: 0.5cm;
  font-family: 'arial';
  color: rgb(0, 0, 0);
  text-align: center
}
#boton{
   border-radius: 30px 30px 30px 30px;
   border: 2px solid ;
   border-color: rgb(4, 196, 255);
   background: rgb(0, 0, 0);
   opacity: 0.75
}
.header2 {
  font-size: 1.5cm;
  font-family: 'arial';
  color: rgb(255, 255, 255);
  text-align: left;
  margin: 1cm; 
  margin-right: 10cm;
}
</style>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
