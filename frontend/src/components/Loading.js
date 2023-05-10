import React from 'react'
import loadingImg from '../images/loading.gif'
import '../styles/loading.css'

export default function Loading () {
  return (
    <div className="div__loading">
      <img src={loadingImg} alt="loading_img" />
    </div>
  )
}
