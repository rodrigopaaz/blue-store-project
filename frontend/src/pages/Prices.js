import React, { useContext } from 'react'
import AppContext from '../context/Context'
import Header from '../components/Header'
import { FaExternalLinkAlt } from 'react-icons/fa'
import '../styles/prices.css'
import Footer from '../components/Footer'

export default function Prices () {
  const { betterPrice } = useContext(AppContext)
  return (
    <div className='div__main' >
        <Header />
    <div className='prices__main__container'>
        {betterPrice.map(({ info, productImg, companyImg, link }) =>
        <div className='prices__card__container' key={info}>
        <img src={productImg} alt="produtoimg" className='prices__image'/>
        <div className='card__prices__container'>
        <p>{info.replace(/à/g, ' à').split('ou')[0]}</p>
        {info.includes('ou') && <p>ou {info.split('ou')[1]}</p>}
        </div>
        <div className='div__link__image'>
        <img src={companyImg} alt="companyimg"/>
        <a href={`https://buscape.com.br${link}`} target='blank' >Ir à pagina <FaExternalLinkAlt /></a>
        </div>
        </div>
        )}
    </div>
    <Footer/>
    </div>
  )
}
