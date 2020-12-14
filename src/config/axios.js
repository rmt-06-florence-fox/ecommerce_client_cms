import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-amp.herokuapp.com'
})

export default instance
