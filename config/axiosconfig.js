import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce207.herokuapp.com/'
})

export default instance
