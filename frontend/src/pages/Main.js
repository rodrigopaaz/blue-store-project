/* eslint-disable react/react-in-jsx-scope */
import '../styles/main.css'
import React, { useContext } from 'react'
import Header from '../components/Header'
import Loading from '../components/Loading'
import AppContext from '../context/Context'
import Categories from '../components/Categories'
import Sugestions from '../components/Sugestions'
import Footer from '../components/Footer'
import imageBackground from '../images/sazionalBackground.jpg'
import Popup from '../components/Popup'

function Main () {
  const { isLoading } = useContext(AppContext)

  return (
    <div className="div__main">
     <Header />
     <Categories />
     {!isLoading
       ? (
        <div className='main__sugestions'>
        <Popup />
        <Sugestions title={'Melhores da Semana'} path={'/'}/>
        <Sugestions title={'Coleção de Inverno'} path={'casacos'} background={imageBackground} titleColor={'rgb(11,55,80)'}/>
        </div>
         )
       : (
        <Loading />
         )}
  <Footer />
    </div>
  )
}

export default Main
