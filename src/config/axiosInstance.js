import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cmsxs.herokuapp.com/'
})

export default instance
