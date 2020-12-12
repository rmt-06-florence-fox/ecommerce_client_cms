import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://gute-new-commerce.herokuapp.com'
})

export default instance
