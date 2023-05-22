import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getCart } from '../utils/localStorage'
import ItemCard from '../components/ItemCard'

export default function Cart () {
  const [items, setItems] = useState([])
  useEffect(() => {
    const cart = getCart()
    setItems(cart)
  }, [])
  return (
    <div>
        <Header />
        {items.map((item, id) => <ItemCard product={item} key={id + item.title}/>)}
    </div>
  )
}
