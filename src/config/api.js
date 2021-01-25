import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://candra-store.herokuapp.com'
})

export default instance
