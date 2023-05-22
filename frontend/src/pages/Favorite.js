import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getFav } from '../utils/localStorage'
import ItemCard from '../components/ItemCard'

export default function Favorite () {
  const [items, setItems] = useState([])
  useEffect(() => {
    const favorite = getFav()
    setItems(favorite)
  }, [])
  return (
    <div>
        <Header />
        {items.map((item, id) => <ItemCard product={item} key={id + item.title}/>)}
    </div>
  )
}
