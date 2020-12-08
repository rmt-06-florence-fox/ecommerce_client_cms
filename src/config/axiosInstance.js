import axios from 'axios'

const instance = axios.create({
  base_URL: 'http://localhost:8080'
})

export default instance
