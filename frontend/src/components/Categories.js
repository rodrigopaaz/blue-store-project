import React, { useEffect, useState } from 'react'
import { getCategories } from '../services/requests'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '../styles/category.css'

export default function Categories () {
  const [category, setCategory] = useState([])
  const getCategory = async () => {
    const catego = await getCategories()
    setCategory(catego)
    console.log(category)
  }

  useEffect(() => {
    getCategory()
  }, [])
  return (
    <div className='div__main__category'>
    <Splide options={ {
      rewind: true,
      gap: '-200px',
      perPage: 2,
      width: '2000px;',
      speed: 2000,
      perMove: 2,
      autoplay: true,
      interval: 3000
    } }>
{category.map((e, index) => (
 <SplideSlide key={e.id + e.name}>
<div className='div__categories'>
   <img src={e.image} alt="product"/>
   <p>{e.name}</p>
</div>
</SplideSlide>
))
}
</Splide>  </div>
  )
}
