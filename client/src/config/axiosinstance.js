import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-by-litha.herokuapp.com'
})

export default instance
