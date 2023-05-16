import React, { useContext } from 'react'
import AppContext from '../context/Context'
import Header from '../components/Header'

export default function Prices () {
  const { betterPrice } = useContext(AppContext)
  return (
    <div>
        <Header />
        {betterPrice.map(({ info, productImg, companyImg, link }) =>
        <div key={info}>
        <img src={productImg} alt="produtoimg"/>
        <p>{info}</p>
        <img src={companyImg} alt="companyimg"/>
        <a href={`https://buscape.com.br${link}`}>ir a pagina</a>

        </div>
        )}
    </div>
  )
}
