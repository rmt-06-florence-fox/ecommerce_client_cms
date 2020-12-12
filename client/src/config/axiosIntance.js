import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cms-server-arfafa.herokuapp.com/'
})

export default instance
