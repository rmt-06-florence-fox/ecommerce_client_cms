import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerceserver-production-dfa5.up.railway.app'
})

export default instance
