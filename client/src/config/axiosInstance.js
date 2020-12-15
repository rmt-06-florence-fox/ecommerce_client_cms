import axios from 'axios'

const instance = axios.create({
  baseUrl: 'https://ecommerce-sandy.herokuapp.com'
})

export default instance
