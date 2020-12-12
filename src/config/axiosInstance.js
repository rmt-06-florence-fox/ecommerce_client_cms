import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://fast-reaches-72869.herokuapp.com/'
})

export default instance
