import axios from 'axios'

export default {
  getColors () {
    return axios.get('/api/colors')
      .then(response => {
        return response.data
      })
  },

  getUsers () {
    return axios.get('/api/users')
      .then(response => {
        return response.data
      })
  },

  getUser (id) {
    return axios.get(`/api/user/${id}`)
      .then(response => {
        return response.data
      })
  }
}
