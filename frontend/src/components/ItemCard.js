import React, { useContext } from 'react'
import AppContext from '../context/Context'
import '../styles/card.css'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

export default function ItemCard (item) {
  const { product } = item
  const { products: compareBetterPrice } = product
  const { setBetterPrice } = useContext(AppContext)
  const history = useHistory()

  return (
    <div className="div__item__card">
      <div className="imagem">
        <img src={product.imageUrl} alt="productImage" />
      </div>
      <div>
          <p>{product.title}</p>
          <p>{`${product.price}`}</p>
          <p>{`Compare entre ${compareBetterPrice.length} vendedores`}</p>
          <button
          type='button'
          onClick={() => {
            setBetterPrice(compareBetterPrice)
            history.push('/products/compare')
          }}
          >
            ver preços
          </button>
      </div>
      <a
        className="link"
        target="_blank"
        rel={'pro noreferrer'}
        href={product.linkUrl}
      >
         {product.siteId === 1 ? 'Mercado Livre' : 'Buscapé'} <FaExternalLinkAlt />
      </a>
    </div>
  )
}
