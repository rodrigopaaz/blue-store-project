import React, { useContext, useState } from 'react'
import { login, register } from '../services/requests'
import { useHistory } from 'react-router-dom'
import '../styles/form.css'
import AppContext from '../context/Context'

export default function Form () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const { location: { pathname } } = useHistory()
  const { setUser } = useContext(AppContext)
  const history = useHistory()
  const host = process.env.REACT_APP_HOST

  const handleInput = async () => {
    const handleUser = pathname !== '/login' ? await register(name, email, password, host) : await login(email, password, host)
    localStorage.setItem('user', JSON.stringify(handleUser))
    setUser(handleUser)
    history.push('/')
    return handleUser
  }

  return (
    <div className='main__form__container'>
      <h4>Insira os dados abaixo:</h4>
        {pathname === '/register' && <label htmlFor="name">
            Nome:
            <input
            onChange={({ target: { value } }) => setName(value)}
            type="text" />
        </label>}
        <label htmlFor="email">
            Email:
            <input
            onChange={({ target: { value } }) => setEmail(value)}
            type="text" />
        </label>
        <label htmlFor="password">
            Senha:
            <input
            onChange={({ target: { value } }) => setPassWord(value)}
            type="password" />
        </label>
        <button
        type='button'
        onClick={() => handleInput()}
        >
            Ok
        </button>
    </div>
  )
}
