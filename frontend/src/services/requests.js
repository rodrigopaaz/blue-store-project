import Axios from 'axios'

const post = async (category, search, host) => {
  const setHost = !host ? 'http://localhost:3000' : host
  try {
    const { data } = await Axios.post(`${setHost}/product`, {
      category,
      search
    })
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

const register = async (name, email, password, host) => {
  const setHost = !host ? 'http://localhost:3000' : host
  try {
    const { data } = await Axios.post(`${setHost}/user`, {
      name,
      email,
      password
    })
    return data
  } catch (error) {
    return []
  }
}

const login = async (email, password, host) => {
  const setHost = !host ? 'http://localhost:3000' : host
  try {
    const { data } = await Axios.post(`${setHost}/login`, {
      email,
      password
    })
    return data
  } catch (error) {
    return []
  }
}

const getCategories = async (host) => {
  try {
    const setHost = !host ? 'http://localhost:3000/category' : `${host}category`
    const { data } = await Axios.get(setHost)
    return data
  } catch (error) {
    return []
  }
}

export default post
export { getCategories, register, login }
