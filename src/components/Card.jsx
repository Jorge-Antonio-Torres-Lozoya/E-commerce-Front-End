/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import imagenDefault from '../assets/imgDefault.png'
import '../styles/card.css'
import { useProductContext } from '../context/ProductContext'

const Card = ({ product_name, brand, image, price, _id, description }) => {
  const context = useProductContext()

  const addDefaultSrc = (ev) => {
    ev.target.src = imagenDefault
  }

  const addToCart = () => {
    const product = context.data.find(product => product._id === _id)
    const isInCart = context.cart.find(product => product._id === _id)
    if (isInCart === undefined) {
      product.quantity = 1
      context.setCart([...context.cart, product])
    } else {
      isInCart.quantity += 1
      context.setCart([...context.cart])
    }
  }

  return (
    <div className='card card-home' style={{ width: '22rem', height: '37rem' }}>
      <img
        onError={addDefaultSrc}
        src={image || imagenDefault}
        className='card-img-top img-card'
        alt='...'
      />
      <div className='card-body d-flex container-body-card px-4'>
        <p className='card-text'>{product_name}</p>
        <p className='card-text'>
          {brand}
        </p>
        <p className='card-text info'> {description} </p>
        <div className='container-price d-flex '>
          <span className='card-price'> <p className='price my-0'> $ {price} </p> </span>
          <button className='fa-solid fa-cart-plus btn-cart-plus px-2 py-2' onClick={() => addToCart()} />
        </div>
      </div>
    </div>
  )
}

export default Card
