import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { cartRem, getCart } from '../utils/localStorage'
import '../styles/cart.css'

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
              >Remove</button></td>
              <td><a href={item.linkUrl} target='_blank' rel="noreferrer">Ir</a></td>
              <td><button
               onClick={() => removeAndUpdateCart(item)}
              >concluído</button></td>
              </tr>
        )}
        <tfoot>
          <tr>
            <td>Total: </td>
            <td>
            {items.reduce((acc, curr) => {
              return acc + Number((curr.price.split('R$')[1].replace('.', '').replace(',', '.')))
            }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </td>
          </tr>
        </tfoot>
        </tbody>
        </table>
        </div>
    </div>
  )
}
