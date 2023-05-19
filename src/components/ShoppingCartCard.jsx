/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react'
import { useProductContext } from '../context/ProductContext'
import '../styles/shoppingCartCard.css'

export const ShoppingCartCard = ({
  product_name,
  quantity,
  image,
  price,
  brand,
  _id
}) => {
  const context = useProductContext()
  const plusToCart = () => {
    const product = context.cart.find(product => product._id === _id)
    product.quantity += 1
    context.setCart([...context.cart])
    console.log(product)
  }
  const minusToCart = () => {
    const product = context.cart.find(product => product._id === _id)
    if (product.quantity > 1) {
      product.quantity -= 1
      context.setCart([...context.cart])
    } else {
      const newCart = context.cart.filter(product => product._id !== _id)
      context.setCart([...newCart])
      console.log('nueva carta', newCart)
    }
  }

  return (
    <div className='card mb-3 card-root'>
      <div className='row g-0 container-img-descripcion-cart'>
        <div className='col-md-4  container-img-cart '>
          <img
            src={image}
            className='img-fluid rounded-start img-card-cart my-3 mx-3'
            alt='...'
          />
        </div>
        <div className='col-md-8 d-flex container-card-body-info flex-shrink-1'>
          <div className='card-body card-body-info mx-3'>
            <div className='container-price-product_name d-flex justify-content-between gap-4'>
              <h5 className='card-title'>{product_name}</h5>
              <span className='fw-bold fz-price'>${price}</span>
            </div>
            <p className='card-text text-start'>Marca: {brand}</p>
            <span className='btn-add-delete rounded py-2'>
              <button className='fa-solid fa-minus me-3 minus  border border-0 text-black   bg-transparent  ' onClick={() => minusToCart()} />
              Cant: {quantity}{' '}
              <button className='fa-solid fa-plus ms-3 plus border border-0 text-black  bg-transparent ' onClick={() => plusToCart()} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShoppingCartCard
