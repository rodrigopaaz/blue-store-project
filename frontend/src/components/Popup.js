import React, { useContext } from 'react'
import '../styles/popup.css'
import AppContext from '../context/Context'

const Popup = () => {
  const { block, setBlock } = useContext(AppContext)

  if (!block) {
    return null
  }

  return (
    <div className='main__popup'>
      <div className='header__popup'>
        <button className="close__button"
        onClick={() => setBlock(false)}
        >
          X
        </button>
      </div>
      <div className='popup__message'>
        <p>Faça login para utilizar esta funcionalidade</p>
      </div>
    </div>
  )
}

export default Popup
