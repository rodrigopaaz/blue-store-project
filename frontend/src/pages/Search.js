/* eslint-disable react/react-in-jsx-scope */
import '../styles/search.css'
import ItemCard from '../components/ItemCard'
import Loading from '../components/Loading'
import Header from '../components/Header'
import AppContext from '../context/Context'
import React, { useContext } from 'react'

function Main () {
  const { products, isLoading } = useContext(AppContext)
  return (
      <div className="div__search">
      <Header />
      <div className='div__search__products'>
      {!isLoading
        ? (
            products.map((item, id) => <ItemCard product={item} key={id}/>)
          )
        : (
        <Loading />
          )}
          </div>
    </div>
  )
}

export default Main
