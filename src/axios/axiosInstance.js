import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-server12.herokuapp.com'
})

export default instance
