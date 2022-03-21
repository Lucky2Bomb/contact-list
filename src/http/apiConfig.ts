import axios from 'axios'

export default axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3003',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `bearer ${localStorage.getItem('token')}`,
  },
})
