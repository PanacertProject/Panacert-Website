import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://panacea-demo.herokuapp.com/'
  })
}
