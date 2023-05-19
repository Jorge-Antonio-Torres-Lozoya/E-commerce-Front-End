import React from 'react'
import { useProductContext } from '../context/ProductContext'
import '../styles/shoppingCart.css'
import { Link } from 'react-router-dom'
import ShoppingCartCard from '../components/ShoppingCartCard'

const ShoppingCart = () => {
  const context = useProductContext()
  console.log(context.cart)
  const quantityInCart = context.cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

  const totalPrice = context.cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  )
  const makeOrder = () => {
    context.setCart([])
  }

  const quantityItemsInCart = context.cart.length
  return (
    <>
      <main className='root-page-cart'>
        {quantityItemsInCart < 1
          ? (
            <div className='container-root-whithout-items my-5 d-flex justify-content-center py-5'>
              <div className=' container-whithout-items'>
                <h2 className='text-center py-4 mx-3'>
                  No hay ningun elemento en el carrito
                </h2>
                <Link to='/' className='btn btn-add-products mb-3'>
                  Agregar productos
                </Link>
              </div>
            </div>
            )
          : (
            <section className='container-root-cart py-5'>
              <div className='container-children-cart py-3 px-4'>
                <div className='container-text'>
                  <h2 className='mx-4 mb-0 mt-1 text-carrito'>Carrito</h2>
                  <p className='text-end mb-1 mx-3'>Precio</p>
                </div>
                {context.cart.map((product) => (
                  <ShoppingCartCard key={product._id} {...product} />
                ))}
              </div>

              <div className='container-checkout'>
                <div className='card card-checkout'>
                  <div className='card-body   d-flex flex-column align-items-center justify-content-center gap-2'>
                    <p className='card-title text-center'>
                      Productos en el carrito: {quantityInCart}
                    </p>
                    <h5 className='card-title  '>Total: ${totalPrice}</h5>
                    <div className='modal fade' id='exampleModal' tabIndex={-1} aria-labelledby='exampleModalLabel' aria-hidden='true'>
                      <div className='modal-dialog'>
                        <div className='modal-content'>
                          <div className='modal-header'>
                            <h1 className='modal-title fs-5' id='exampleModalLabel'>Tonal</h1>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
                          </div>
                          <div className='modal-body d-flex justify-content-center gap-3 align-items-center'>
                            <h3 className='text-black text-center'>Pedido realizado con éxito</h3>
                            <span className='fa-solid fa-check fa-2x text-success mb-2 ' />
                          </div>
                          <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                            <button type='button' className='btn btn-primary'>Ver pedidos</button>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>
                </div>
                <button
                  type='button' className='btn btn-checkout  my-2 data-bs-toggle="modal" data-bs-target="#exampleModal"' data-bs-toggle='modal' data-bs-target='#exampleModal'
                  onClick={() => makeOrder()}
                >
                  Proceder al pago
                </button>
              </div>
            </section>
            )}
      </main>
    </>
  )
}

export default ShoppingCart
