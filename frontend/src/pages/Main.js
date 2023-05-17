/* eslint-disable react/react-in-jsx-scope */
import '../styles/main.css'
import React, { useContext } from 'react'
import Header from '../components/Header'
import Loading from '../components/Loading'
import AppContext from '../context/Context'
import Categories from '../components/Categories'

function Main () {
  const { isLoading } = useContext(AppContext)
  return (
    <div className="div__main">
     <Header />
     <Categories />
     {!isLoading
       ? (
           <div />
         )
       : (
        <Loading />
         )}
    </div>
  )
}

export default Main
