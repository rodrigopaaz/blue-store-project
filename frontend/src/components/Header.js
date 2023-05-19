/* eslint-disable no-undef */
import React, { useContext } from 'react'
import AppContext from '../context/Context'
import { useHistory } from 'react-router-dom'
import post from '../services/requests'
/* import icon from '../images/logo.png' */
import '../styles/header.css'
import { VscSearch } from 'react-icons/vsc'
import { ImHeart } from 'react-icons/im'
import { BsCartPlus } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'

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
    console.log(data)
    setProducts(data)
    setIsLoading(false)
    history.push('/search')
  }

  const history = useHistory()

  return (
    <div className='main__div__header'>
    <div className="div__header">
      <div>
      <button
      type='button'
      className='login__button'
      >
        <p>Entre ou Cadastre-se</p>
        <p><AiOutlineUser size={30}/> Minha Conta</p>
      </button>
      </div>
      <p className='lupa__icon'><VscSearch size={30}/></p>
      <label type="text">
        <input
          placeholder="Digite o que procura"
          type="text"
          onChange={({ target: { value } }) => setSearch(value)}
        />
      </label>
      <button
        className='search__button'
        type="button"
        onClick={() => {
          getProducts()
        }}
      >
        OK
      </button>
      <button
      type='button'
      className='fav__button'
      ><ImHeart size={20} color='red'/> <p>Favoritos</p>

      </button>

      <button
      className='cart__button'
      type='button'
      >
       <BsCartPlus size={30}/>
      </button>
    </div>
    </div>
  )
}
