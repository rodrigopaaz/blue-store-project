import React, { useContext, useEffect, useState } from 'react'
import post, { getCategories } from '../services/requests'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '../styles/category.css'
import AppContext from '../context/Context'
import { useHistory } from 'react-router-dom'

export default function Categories () {
  const { setProducts, setIsLoading } = useContext(AppContext)
  const [category, setCategory] = useState([])
  const history = useHistory()
  const getCategory = async () => {
    setIsLoading(true)
    const catego = await getCategories()
    setCategory(catego)
    setIsLoading(false)
  }

  const setItems = async (item) => {
    setIsLoading(true)
    const host = process.env.REACT_APP_HOST
    const product = await post(null, item, host)
    setProducts(product)
    setIsLoading(false)
    history.push('/search')
  }

  useEffect(() => {
    getCategory()
  }, [])
  return (
    <div className='div__main__category'>
    <Splide options={ {
      wheel: true,
      rewind: true,
      trimSpace: true,
      wheelMinThreshold: 3,
      wheelSleep: 2,
      gap: '1px',
      perPage: 7,
      width: '1280px',
      height: '220px',
      speed: 1000,
      perMove: 7,
      autoplay: true,
      interval: 3000
    } }>
{category.map((e, index) => (
 <SplideSlide key={e.id + e.name} aria-details={e.name}>
<button
type='button'
onClick={() => setItems(e.name)}
className='container__categories'>
  <div>
   <img src={e.image} alt="product"/>
   <p>{e.name}</p>
   </div>
</button>
</SplideSlide>
))
}
</Splide>  </div>
  )
}
