import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://panacea-demo.herokuapp.com/'
  })
}

const CertIssuerApiBaseUrl = 'http://panacert-ropsten-issuer.herokuapp.com'
export const GetBlockcertUrl = CertIssuerApiBaseUrl + '/blockcerts/'

export function CertIssuerApi () {
  return axios.create({
    baseURL: CertIssuerApiBaseUrl
  })
}
