import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-icanq.herokuapp.com/'
})

export default instance
