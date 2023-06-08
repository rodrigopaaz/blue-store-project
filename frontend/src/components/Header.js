/* eslint-disable no-undef */
import React, { useContext, useState } from 'react'
import AppContext from '../context/Context'
import post from '../services/requests'
import { useHistory } from 'react-router-dom'
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
    setSearch,
    user,
    setBlock,
    block
  } = useContext(AppContext)

  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const getProducts = async () => {
    setIsLoading(true)
    const host = process.env.REACT_APP_HOST
    const data = await post(null, search, host)
    setProducts(data)
    setIsLoading(false)
    history.push('/search')
  }
  const history = useHistory()

  const isLogged = (path) => {
    if (user.token) {
      return history.push(path)
    }
    return setBlock(true)
  }

  return (
    <div className='main__div__header'
    style={block ? { filter: 'blur(8px)' } : null}
    >
      <div className='div__header'>
        <div>
          {!user.token && (
            <div
              className='login__container'
              onMouseEnter={toggleMenu}
              onMouseLeave={toggleMenu}
            >
              <AiOutlineUser size={43} style={{ height: '45px' }} />
              <div>
                <p>Entre ou Cadastre-se</p>
                <p>Minha Conta</p>
                <div
                  className='login__menu'
                  style={!menu ? { height: '0' } : { height: '80px' }}
                >
                  <button type='button' onClick={() => history.push('/login')}>
                    Acesse sua conta
                  </button>
                  <button type='button' onClick={() => history.push('/register')}>
                    Cadastre-se
                  </button>
                </div>
              </div>
            </div>
          )}
          {user.token && (
            <div className='login__menu'>
              <p>{user.name}</p>
            </div>
          )}
        </div>
        <div className='search__header'>
          <div className='div__header__inputs'>
            <button className='logo__button' onClick={() => history.push('/')} />
            <p className='lupa__icon'>
              <VscSearch size={20} />
            </p>
            <label type='text'>
              <input
                placeholder='Digite o que procura'
                type='text'
                onChange={({ target: { value } }) => setSearch(value)}
                onKeyDown={({ key }) => {
                  if (key === 'Enter') getProducts()
                }}
              />
            </label>
            <button
              className='search__button'
              type='button'
              onClick={() => {
                getProducts()
              }}
            >
              OK
            </button>
            <button type='button'
            className='fav__button'
            title='Faça login ou cadastre-se para utilizar esta funcionalidade'
            onClick={() => isLogged('/favorites')}>
              <ImHeart size={20} color='white' /> <p>Favoritos</p>
            </button>

            <button
              className='cart__button'
              type='button'
              onClick={() => isLogged('/cart')}
              title='Faça login ou cadastre-se para utilizar esta funcionalidade'
            >
              <BsCartPlus size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
