/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react'
import post, { getCategories } from '../services/requests'
import AppContext from '../context/Context'

export default function Inputs () {
  const [categor, setCategor] = useState([])
  const {
    setProducts,
    setIsLoading,
    category,
    setCategory,
    search,
    setSearch,
    site,
    setSite
  } = useContext(AppContext)

  const getCategory = async () => {
    const categ = await getCategories()
    console.log(categ)
    setCategor(categ)
  }

  useEffect(() => {
    getCategory()
  }, [])

  const siteSwitch = async () => {
    setIsLoading(true)
    const host = process.env.REACT_APP_HOST
    if (site === 'mercado livre') {
      const data = await post(site, category, search, host)
      setProducts(data)
      setIsLoading(false)
      return data
    }
    if (site === 'buscape') {
      const data = await post(site, category, search, host)
      setProducts(data)
      setIsLoading(false)
      return data
    }
    const buscape = await post('buscape', category, search, host)
    const meli = await post('mercado livre', category, search, host)
    setProducts([...buscape, ...meli])
    setIsLoading(false)
  }

  return (
    <div className="div__inputs">
      <label htmlFor="category">
        <select
          type="text"
          onChange={({ target: { value } }) => setSite(value)}
        >
          <option value="" disabled selected hidden>
            Web
          </option>
          <option value="ambos">Todas</option>
          <option value="mercado livre">MercadoLivre</option>
          <option value="buscape">Buscapé</option>
        </select>
      </label>
      <label htmlFor="site">
        <select
          type="text"
          onChange={({ target: { value } }) => setCategory(value)}
        >
          <option value="" disabled selected hidden>
            Categorias
          </option>
          {categor.map((e, i) => <option key={i} value={e.name}>{e.name}</option>)}
        </select>
      </label>

      <label type="text">
        <input
          placeholder="Type your search here"
          type="text"
          onChange={({ target: { value } }) => setSearch(value)}
        />
      </label>
      <button
        type="button"
        disabled={!category || !site}
        onClick={async () => {
          setProducts([])
          await siteSwitch()
        }}
      >
        Search
      </button>
    </div>
  )
}
