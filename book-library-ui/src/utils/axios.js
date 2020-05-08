import axios from 'axios'
import {store} from '../store'
import { push } from 'react-router-redux'
const instance = axios.create({
  timeout: 1000 * 10,
  headers: { 'Content-Type': 'application/json' }
})

instance.interceptors.request.use(
  reqConfig => {
    if (!reqConfig.headers) {
      reqConfig.headers = {}
    }
    reqConfig.timeout = 15000

    return reqConfig
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => response,
  error => {
    if (typeof error === 'undefined') {
      // request cancelled
      // when backend server is not available at all
    } else if (typeof error.response === 'undefined') {
      // when request is timeout
    } else if (error.response.status === 401) {
      // apply refresh token logic here instead of redirecting to login
      localStorage.clear()
      sessionStorage.clear()
      store.dispatch(push('/login'))
    }

    return Promise.reject(error.response)
  }
)

export default instance
