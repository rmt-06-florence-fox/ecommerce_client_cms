import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://robby-cms.herokuapp.com'
})

export default instance
