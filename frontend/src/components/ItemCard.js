import React from 'react'
import '../styles/card.css'
import { FaExternalLinkAlt } from 'react-icons/fa'
export default function ItemCard (item) {
  const { product } = item
  return (
    <div className="div__item__card">
      <div className="imagem">
        <img src={product.imageUrl} alt="productImage" />
      </div>
      <div>
          <p>{product.title}</p>
          <p>{`${product.price}`}</p>
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
