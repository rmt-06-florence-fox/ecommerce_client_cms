import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cms-server-ecom.herokuapp.com'
})

export default instance
