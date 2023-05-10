import Axios from 'axios'

const post = async (site, category, search, host) => {
  console.log(site)
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

export default post
