import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { cartRem, getCart } from '../utils/localStorage'
import { MdCancel } from 'react-icons/md'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { AiFillCheckCircle } from 'react-icons/ai'
import '../styles/cart.css'
import Footer from '../components/Footer'

export default function Cart () {
  const [items, setItems] = useState([])
  useEffect(() => {
    const cart = getCart()
    setItems(cart)
  }, [])

  const removeAndUpdateCart = (item) => {
    cartRem(item)
    const cart = getCart()
    setItems(cart)
  }
  return (
    <div className='div__main__cart'>
        <Header />
        <div className='div__cart'>
          <table>
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Descrição</td>
                  <td>Preço</td>
                  <td>Remover Item</td>
                  <td>Ir à pagina de vendas</td>
                  <td>Marcar compra como concluída</td>
                  </tr>
                </thead>
                <tbody >
        {items.map((item, id) =>
              <tr key={id + item.title}>
              <td>{id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td><button
              onClick={() => removeAndUpdateCart(item)}
              >{<MdCancel color='red' size={20}/>}</button></td>
              <td><a href={item.linkUrl} target='_blank' rel="noreferrer">{<FaExternalLinkAlt color='rgb(11, 55, 80)'/>}</a></td>
              <td><button
               onClick={() => removeAndUpdateCart(item)}
              >{<AiFillCheckCircle color='green' size={20}/>}</button></td>
              </tr>
        )}
        </tbody>
        <tfoot>
          <tr>
            <td>
            {`Total: ${items.reduce((acc, curr) => {
              return acc + Number((curr.price.split('R$')[1].replace('.', '').replace(',', '.')))
            }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
            </td>
          </tr>
        </tfoot>
        </table>
        </div>
        <Footer />
    </div>
  )
}
