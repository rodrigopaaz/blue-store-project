import React, { useState } from 'react'
import { login, register } from '../services/requests'
import { useHistory } from 'react-router-dom'

export default function Form () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const { location: { pathname } } = useHistory()
  const history = useHistory()

  const handleInput = async () => {
    const handleUser = pathname !== '/login' ? await register(name, email, password) : await login(email, password)
    localStorage.setItem('user', JSON.stringify(handleUser))
    history.push('/')
    return handleUser
  }

  return (
    <div className='main__form__container'>
        {pathname === '/register' && <label htmlFor="name">
            name:
            <input
            onChange={({ target: { value } }) => setName(value)}
            type="text" />
        </label>}
        <label htmlFor="email">
            email:
            <input
            onChange={({ target: { value } }) => setEmail(value)}
            type="text" />
        </label>
        <label htmlFor="password">
            password:
            <input
            onChange={({ target: { value } }) => setPassWord(value)}
            type="text" />
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
