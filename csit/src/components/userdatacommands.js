import axios from 'axios'
const baseUrl = 'http://localhost:3001/users'

const getAll = () => {
  return axios.get(baseUrl)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { getAll, update }
