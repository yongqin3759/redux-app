import axios from 'axios'

const baseURL = 'http://localhost:3001/notes'

const getAll = async() => {
  const response = await axios.get(baseURL)
  return response.data
}

const createNew = async(content) => {
  const object = {content, important: false}
  const res = await axios.post(baseURL, object)
  return res.data
}

export default {getAll, createNew}