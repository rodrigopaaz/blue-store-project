import React, { useEffect, useState } from 'react'
import post from '../services/requests'
import ItemCard from './ItemCard'
import Loading from './Loading'
import '../styles/sugestion.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'

export default function Sugestions ({ title, path, background, titleColor }) {
  const [sugestion, setSugestion] = useState([])
  const getProducts = async () => {
    const host = process.env.REACT_APP_HOST
    const data = await post(null, path, host)
    setSugestion(data)
  }

  const divBackground = background ? { backgroundImage: `url(${background})` } : { backgroundColor: 'rgb(11,55,80)' }
  const textColor = titleColor ? { color: titleColor } : { color: 'aliceblue' }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className='div__main__sugestion' style={divBackground}>
        {sugestion.length > 0
          ? (
                <div>
                    <h4 style={textColor}>{`${title}`}</h4>
                <Splide options={ {
                  pauseOnHover: true,
                  rewind: true,
                  trimSpace: true,
                  perPage: 4,
                  padding: '5px',
                  width: '1280px',
                  height: '500px',
                  speed: 1000,
                  perMove: 4
                  /*                  autoplay: true,
                  interval: 7000 */
                } }>
              {sugestion.map((item, _index) => (
               <SplideSlide key={item.id + item.name} aria-details={item.name}>
             <ItemCard product={item} key={item.id + item.name}/>
              </SplideSlide>
              ))
              }
              </Splide>
              </div>

            )
          : (
        <Loading />
            )}
    </div>
  )
}

Sugestions.propTypes = {}.isRequired
