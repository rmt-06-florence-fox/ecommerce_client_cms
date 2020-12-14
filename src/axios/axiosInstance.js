import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://servercms.herokuapp.com/'
})

export default instance
