import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Register from '@/components/Register'
import Login from '@/components/Login'
import CertVerification from '@/components/CertVerification'
import CreateTemplate from '@/components/CreateTemplate'
import CreateCertificates from '@/components/CreateCertificates'
import universidad from '@/components/universidad'
import empresas from '@/components/empresas'
import persona from '@/components/persona'

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
      path: '/certificates/template/new',
      name: 'CreateTemplate',
      component: CreateTemplate
    },
    {
      path: '/certificates/create/',
      name: 'CreateCertificates',
      component: CreateCertificates
    },
    {
      path: '/certificates/uiversidad',
      name: 'universidad',
      component: universidad
    },
    {
      path: '/certificates/empresas',
      name: 'empresas',
      component: empresas
    },
    {
      path: '/certificates/persona',
      name: 'persona',
      component: persona
    }
  ]
})
