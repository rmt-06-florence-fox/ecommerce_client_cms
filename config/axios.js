import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://mozpedia-cms.herokuapp.com'
})
export default instance
