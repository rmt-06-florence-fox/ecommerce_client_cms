import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-jar.herokuapp.com'
})

export default instance
