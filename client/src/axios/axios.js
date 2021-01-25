import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-ym.herokuapp.com/'
})

export default instance
