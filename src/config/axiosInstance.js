import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-awesome.herokuapp.com'
})

export default instance
