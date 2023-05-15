import React from 'react'
import Card from '../components/Card'
import { useProductContext } from '../context/ProductContext'
import '../styles/home.css'
const Home = () => {
  const context = useProductContext()
  return (
    <>
      <section className='contenedorRoot '>
        <div className='columns'>
          {
      context.loading
        ? <p className='textLoading py-2 fs-3 '>Cargando...</p>
        : context.data.filter(product => {
          if (context.search === '') {
            return product
          } else if (product.product_name.toLowerCase().includes(context.search.toLowerCase())) {
            return product
          }
          return null
        })
          .map((product, index) => (
            <Card key={product._id} {...product} />
          ))

    }
        </div>
      </section>
    </>
  )
}

export default Home
