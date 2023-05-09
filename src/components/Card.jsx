import React from 'react'
import imagenDefault from '../assets/imgDefault.png'
import '../styles/card.css'

const Card = () => {
  const addDefaultSrc = (ev) => {
    ev.target.src = imagenDefault
  }
  const addToCart = () => {
    console.log('agregado al carrito')
  }

  return (
    <div className='card' style={{ width: '18rem' }}>
      <img
        onError={addDefaultSrc}
        src={imagenDefault}
        className='card-img-top'
        alt='...'
      />
      <div className='card-body d-flex container-body-card'>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className='container-price d-flex'>
          <span>$</span>
          <button className='fa-solid fa-cart-plus btn-cart-plus px-2 py-2' onClick={() => addToCart()} />
        </div>
      </div>
    </div>
  )
}

export default Card
