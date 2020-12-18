import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://web-server-cms-ykp.herokuapp.com'
})

export default instance
