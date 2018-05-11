import axios from 'axios'

export default {
  getUsers () {
    return axios.get('/users')
      .then(response => {
        return response.data
      })
  }
}
