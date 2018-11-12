import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}

const CertIssuerApiBaseUrl = 'http://panacert-ropsten-issuer.herokuapp.com'
export const GetBlockcertUrl = CertIssuerApiBaseUrl + '/blockcerts/'

export function CertIssuerApi () {
  return axios.create({
    baseURL: CertIssuerApiBaseUrl
  })
}
