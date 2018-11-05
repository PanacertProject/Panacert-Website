import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Register from '@/components/Register'
import Login from '@/components/Login'
import CertVerification from '@/components/CertVerification'
import UploadCertificate from '@/components/UploadCertificate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Landing
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/certificates/verify',
      name: 'verifycerts',
      component: CertVerification
    },
    {
      path: '/certificates/upload',
      name: 'uploadCertificate',
      component: UploadCertificate
    }
  ]
})
