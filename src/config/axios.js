import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jarooda-db-ecommerce.herokuapp.com'
})

export default instance
