import React, { useContext, useState } from 'react'
import AppContext from '../context/Context'
import '../styles/card.css'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import imgNotFound from '../images/indsp.gif'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCartPlus } from 'react-icons/bs'

export default function ItemCard (item) {
  const { product } = item
  const { products: compareBetterPrice } = product
  const { setBetterPrice } = useContext(AppContext)
  const history = useHistory()

  const compareLink = (link) => {
    if (!link.length) return 'ir a página'
    const message = `Compare entre ${link.length} vendedores`
    return <>{message} <FaExternalLinkAlt /></>
  }
  const [toggleCardMenu, setToggleCardMenu] = useState(false)
  const toogleCard = !toggleCardMenu ? '0' : '20px'
  const toogleButton = !toggleCardMenu ? '0' : '40px'

  return (
    <div className="div__item__card"
    onMouseEnter={ () => { setToggleCardMenu(true) }}
    onMouseLeave={ () => { setToggleCardMenu(false) }}
    >
      <div className='card__menu__div'>
        <button
        type='button'
        style={{
          transition: '0.01s',
          width: toogleButton,
          height: toogleButton
        }}
        >
        <AiOutlineHeart size={toogleCard} color='red' />
        </button>
        <button
        type='button'
        style={{
          transition: '0.01s',
          width: toogleButton,
          height: toogleButton
        }}
        >
          <BsCartPlus
          size={toogleCard}
          color='black'/>
          </button>
      </div>
      <div className="imagem">
        <img src={product.imageUrl ? product.imageUrl : imgNotFound} alt="productImage" />
      </div>
      <div>
          <p>{product.title}</p>
          <p>{`${product.price}`}</p>
          <button
          type='button'
          className='link'
          onClick={() => {
            setBetterPrice(compareBetterPrice)
            if (compareBetterPrice.length) {
              history.push('/products/compare')
            } else {
              window.location.href = product.linkUrl
            }
          }}
          >
            {compareLink(compareBetterPrice)}
                    </button>
      </div>
    </div>
  )
}
