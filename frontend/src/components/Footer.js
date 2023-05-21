import React, { useContext } from 'react'
import '../styles/footer.css'
import brands from '../utils/brands'
import AppContext from '../context/Context'
import post from '../services/requests'

export default function Footer () {
  const {
    setProducts,
    setIsLoading
  } = useContext(AppContext)
  const getProducts = async (value) => {
    console.log(value)
    setIsLoading(true)
    const host = process.env.REACT_APP_HOST
    const data = await post(null, value, host)
    setProducts(data)
    setIsLoading(false)
    history.push('/search')
  }
  return (
    <div className='main__footer__container'>
        <h4>Marcas populares</h4>
        <div className='brands__container'>
        {brands.map((b) => <button
        key={b}
        type='button'
        onClick={() => getProducts(b)}
        >{b}
        </button>)}
        </div>
        </div>
  )
}
