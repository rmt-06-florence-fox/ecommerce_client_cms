import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tadikamesra.herokuapp.com/'
})

export default instance
