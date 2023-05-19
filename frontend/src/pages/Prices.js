import React, { useContext } from 'react'
import AppContext from '../context/Context'
import Header from '../components/Header'
import '../styles/prices.css'

export default function Prices () {
  const { betterPrice } = useContext(AppContext)
  return (
    <div className='div__main' >
        <Header />
    <div className='prices__main__container'>
        {betterPrice.map(({ info, productImg, companyImg, link }) =>
        <div className='prices__card__container' key={info}>
        <img src={productImg} alt="produtoimg"/>
        <p>{info}</p>
        <img src={companyImg} alt="companyimg"/>
        <a href={`https://buscape.com.br${link}`}>ir a pagina</a>

        </div>
        )}
    </div>
    </div>
  )
}
