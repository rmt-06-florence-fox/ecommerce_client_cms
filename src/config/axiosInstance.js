import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-cemsky.herokuapp.com/'
})

export default instance
