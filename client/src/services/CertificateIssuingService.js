import {CertIssuerApi} from '@/services/Api'

export default {
  issue (unsignedCertificates) {
    return CertIssuerApi().post('issue-blockcerts', unsignedCertificates)
  }
}
