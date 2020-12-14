import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-server-p2.herokuapp.com/'
})

export default instance
