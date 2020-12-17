import axios from 'axios'

const instance = axios.create({
  // baseUrl: 'https://ecommerce-sandy.herokuapp.com'
  baseUrl: 'http://localhost:3000'
})

export default instance
