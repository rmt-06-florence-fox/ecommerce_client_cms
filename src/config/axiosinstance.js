import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-cms-efrizal.herokuapp.com'
})

export default instance
