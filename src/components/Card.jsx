/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import imagenDefault from '../assets/imgDefault.png'
import '../styles/card.css'
import { useProductContext } from '../context/ProductContext'

const Card = ({ product_name, description, image, price, _id }) => {
  const context = useProductContext()

  const addDefaultSrc = (ev) => {
    ev.target.src = imagenDefault
  }

  const addToCart = () => {
    context.setCart((currItems) => {
      console.log(currItems)
      const isItemsFound = currItems.find((item) => item._id === _id)
      if (isItemsFound) {
        return currItems.map((item) => {
          console.log(item)
          if (item._id === _id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...currItems, { _id, product_name, quantity: 1, price }]
      }
    })
  }

  return (
    <div className='card' style={{ width: '18rem' }}>
      <img
        onError={addDefaultSrc}
        src={image || imagenDefault}
        className='card-img-top img-card'
        alt='...'
      />
      <div className='card-body d-flex container-body-card'>
        <p>{product_name}</p>
        <p className='card-text'>
          {description}
        </p>
        <div className='container-price d-flex'>
          <span>${price}</span>
          <button className='fa-solid fa-cart-plus btn-cart-plus px-2 py-2' onClick={() => addToCart()} />
        </div>
      </div>
    </div>
  )
}

export default Card
