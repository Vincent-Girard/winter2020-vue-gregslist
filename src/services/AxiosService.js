import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://gregslist-server.herokuapp.com/api/',
  timeout: 3000
})
