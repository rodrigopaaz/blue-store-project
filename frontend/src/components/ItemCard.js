import React, { useEffect, useContext, useState } from 'react'
import AppContext from '../context/Context'
import '../styles/card.css'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import imgNotFound from '../images/indsp.gif'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsCartPlus } from 'react-icons/bs'
import { cartAdd, cartRem, favAdd, favRem, getCart, getFav } from '../utils/localStorage'

export default function ItemCard (item) {
  const { product } = item
  const { products: compareBetterPrice } = product
  const { setBetterPrice } = useContext(AppContext)
  const history = useHistory()

  const compareLink = (link) => {
    if (!link) return 'ir a página ' // link.length
    const message = `Compare entre ${link.length} vendedores`
    return <>{message} <FaExternalLinkAlt /></>
  }
  const [toggleCardMenu, setToggleCardMenu] = useState(false)
  const [toggleFavorite, setToggleFavorite] = useState(false)
  const [toggleCart, setToggleCart] = useState(false)
  const toogleCard = !toggleCardMenu ? '0' : '20px'
  const toogleButton = !toggleCardMenu ? '0' : '40px'
  const favorite = toggleFavorite
    ? <AiFillHeart size={toogleCard} color='#006494' />
    : <AiOutlineHeart size={toogleCard} color='#006494' />

  useEffect(() => {
    const item = getFav()
    const checkItem = item.find((e) => e.title === product.title)
    if (checkItem)setToggleFavorite(true)
  }, [])

  useEffect(() => {
    const item = getCart()
    const checkItem = item.find((e) => e.title === product.title)
    if (checkItem)setToggleCart(true)
  }, [])

  const handleFavorite = () => {
    !toggleFavorite ? favAdd(product) : favRem(product)
    setToggleFavorite(!toggleFavorite)
  }

  const handleCart = () => {
    !toggleCart ? cartAdd(product) : cartRem(product)
    setToggleCart(!toggleCart)
  }

  return (
    <div className="div__item__card"
    onMouseEnter={ () => { setToggleCardMenu(true) }}
    onMouseLeave={ () => { setToggleCardMenu(false) }}
    >
      <div className='card__menu__div'>
        <button
        type='button'
        onClick={() => handleFavorite()}
        style={{
          transition: '0.01s',
          width: toogleButton,
          height: toogleButton
        }}
        >
        {favorite}
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
          onClick={() => handleCart()}
          color='rgb(0,100,148)'/>
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
