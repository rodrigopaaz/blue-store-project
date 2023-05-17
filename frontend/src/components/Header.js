/* eslint-disable no-undef */
import React, { useContext } from 'react'
import AppContext from '../context/Context'
import { useHistory } from 'react-router-dom'
import post from '../services/requests'
import icon from '../images/economizeIcon.png'
import '../styles/header.css'
import { VscSearch } from 'react-icons/vsc'
import { ImHeart } from 'react-icons/im'
import { AiOutlineUser } from 'react-icons/ai'
import { BsCartPlus } from 'react-icons/bs'

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
        onClick={async () => {
          setProducts([])
          await getProducts()
          history.push('/search')
        }}
      >
        OK
      </button>
      <button
      type='button'
      className='fav__button'
      ><p> <ImHeart size={20}/> Favoritos</p>

      </button>
      <button
      type='button'
      className='login__button'
      >
        <p>Entre ou Cadastre-se</p>
        <p><AiOutlineUser size={30}/> Minha Conta</p>
      </button>
      <button
      className='cart__button'
      type='button'
      >
       <BsCartPlus size={30}/>
      </button>
      <table>
        <tbody>
          <th>Top trends</th>
          <th>Sugestões</th>
          <th>Ofertas</th>
        </tbody>
      </table>
    </div>
    </div>
  )
}
