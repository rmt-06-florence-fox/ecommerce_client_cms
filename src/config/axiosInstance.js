import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecms-server.herokuapp.com'
})

export default instance
