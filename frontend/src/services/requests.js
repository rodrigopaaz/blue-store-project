import Axios from 'axios'

const post = async (site, category, search, host) => {
  const setHost = !host ? 'http://localhost:3000' : `https://${host}`
  try {
    const { data } = await Axios.post(`${setHost}/product`, {
      site,
      category,
      search
    })
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

const getCategories = async () => {
  try {
    const { data } = await Axios.get('http://localhost:3000/category')
    return data
  } catch (error) {
    return []
  }
}

export default post
export { getCategories }
