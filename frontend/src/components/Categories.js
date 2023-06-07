import React, { useContext, useEffect, useState } from 'react'
import post, { getCategories } from '../services/requests'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '../styles/category.css'
import AppContext from '../context/Context'
import { useHistory } from 'react-router-dom'

export default function Categories () {
  const host = process.env.REACT_APP_HOST
  const { setProducts, setIsLoading, block } = useContext(AppContext)
  const [category, setCategory] = useState([])
  const history = useHistory()
  const getCategory = async () => {
    setIsLoading(true)
    const catego = await getCategories(host)
    setCategory(catego)
    setIsLoading(false)
  }

  const setItems = async (item) => {
    const host = process.env.REACT_APP_HOST
    setIsLoading(true)
    const product = await post(null, item, host)
    setProducts(product)
    setIsLoading(false)
    history.push('/search')
  }

  useEffect(() => {
    getCategory()
  }, [])
  return (
    <div className='div__main__category'
    style={block ? { filter: 'blur(8px)' } : null}
    >
    <Splide options={ {
      wheel: true,
      rewind: true,
      trimSpace: true,
      wheelMinThreshold: 4,
      wheelSleep: '1100',
      gap: '1px',
      perPage: 9,
      width: '1260px',
      height: '185px',
      speed: 1000,
      perMove: 2,
      autoplay: true,
      interval: 3000
    } }>
{category.map((e, index) => (
 <SplideSlide key={e.id + e.name} aria-details={e.name}>
<button
type='button'
onClick={async () => await setItems(e.name)}
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
