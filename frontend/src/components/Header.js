/* eslint-disable no-undef */
import React, { useContext } from 'react'
import AppContext from '../context/Context'
import { useHistory } from 'react-router-dom'
import post from '../services/requests'
import icon from '../images/economizeIcon.png'
import '../styles/header.css'

export default function Header () {
  const {
    setProducts,
    setIsLoading,
    search,
    setSearch
  } = useContext(AppContext)

  const getProducts = async () => {
    setIsLoading(true)
    const host = process.env.REACT_APP_HOST
    const data = await post(null, search, host)
    setProducts(data)
    setIsLoading(false)
    return data
  }

  const history = useHistory()

  return (
    <div className='main__div__header'>
    <div className="div__header">
      <div>
      <img src={icon} alt="ecoicon" />
      <h4 className='div__header__title'>Economize</h4>
      </div>
      <label type="text">
        <input
          placeholder="Type your search here"
          type="text"
          onChange={({ target: { value } }) => setSearch(value)}
        />
      </label>
      <button
        type="button"
        onClick={async () => {
          setProducts([])
          await getProducts()
          history.push('/search')
        }}
      >
        Search
      </button>
      <button
      type='button'
      >
        Lista de Desejos
      </button>
      <button
      type='button'
      >
        <p>Entre ou Cadastre-se</p>
        <p>Minha Conta</p>
      </button>
      <button
      type='button'
      >
        Carrinho
      </button>
    </div>
    </div>
  )
}
