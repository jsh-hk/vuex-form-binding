import axios from 'axios'

export default {
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
