import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
  // baseURL: 'https://ecommerce-cms-hisyam.herokuapp.com'
})

export default instance
