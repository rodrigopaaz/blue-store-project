import Axios from 'axios'

const post = async (category, search, host) => {
  const setHost = !host ? 'http://localhost:3000' : `https://${host}`
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

const getCategories = async (host) => {
  try {
    const setHost = !host ? 'http://localhost:3000/category' : `https://${host}/category`
    const { data } = await Axios.get(setHost)
    return data
  } catch (error) {
    return []
  }
}

export default post
export { getCategories }
