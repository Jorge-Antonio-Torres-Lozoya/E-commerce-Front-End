import React, { useContext } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'
import { useProductContext } from '../context/ProductContext'
import logo from '../assets/tonal-navbar.png'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const context = useProductContext()
  const location = useLocation()
  const navigate = useNavigate()
  const { isAuth, logout } = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    context.setSearch(event.target.inputSearch.value)
    console.log(context.search)
    if (location.pathname !== '/') {
      navigate('/')
    }
    console.log(location.pathname)
  }
  const quantity = context.cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)
  const resetSearch = () => {
    context.setSearch('')
  }

  const Artesania = () => {
    context.setSearch('Artesania')
    console.log(context.search)
  }
  const Libros = () => {
    context.setSearch('Libros')
    console.log(context.search)
  }
  const Espejos = () => {
    context.setSearch('Espejos')
    console.log(context.search)
  }
  const Musica = () => {
    context.setSearch('Music')
    console.log(context.search)
  }
  const Automotive = () => {
    context.setSearch('Automotive')
    console.log(context.search)
  }

  const Sahumador = () => {
    context.setSearch('Sahumador')
    console.log(context.search)
  }
  const Danza = () => {
    context.setSearch('Danza')
    console.log(context.search)
  }

  const Juegos = () => {
    context.setSearch('Juegos')
    console.log(context.search)
  }
  const Industrial = () => {
    context.setSearch('Industrial')
    console.log(context.search)
  }
  const Ropa = () => {
    context.setSearch('Ropa')
    console.log(context.search)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-color fixed-top '>
      <div className='container-fluid  '>
        <Link className='navbar-brand text-white fs-2 py-1 mx-2 logo' to='/' onClick={resetSearch}>
          <img className='logo-tonal-nav mb-1' src={logo} alt='' />
        </Link>

        <button
          className=' btn-nav'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i className='fa-solid fa-bars fa-lg nav-bars' />
        </button>
        <div className='collapse navbar-collapse container-collapse   ' id='navbarSupportedContent'>
          <ul className=' me-auto mb-2 mb-lg-0 lista-categoria'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle text-white me-2 '
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Categorias
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <button className='dropdown-item' onClick={() => Artesania()}>
                    Artesania
                  </button>
                </li>
                <li>
                  <button className='dropdown-item' onClick={() => Libros()}>
                    Libros
                  </button>
                </li>
                <li>
                  <button className='dropdown-item' onClick={() => Espejos()}>
                    Espejos
                  </button>
                </li>
                <li>
                  <button className='dropdown-item' onClick={() => Musica()}>
                    Música
                  </button>
                </li>
                <li>
                  <button className='dropdown-item' onClick={() => Automotive()}>
                    Automotive
                  </button>
                </li>
                <li>
                  <button className='dropdown-item' onClick={() => Sahumador()}>
                    Sahumador
                  </button>
                </li>
                <li>
                  <button className='dropdown-item' onClick={() => Danza()}>
                    Danza
                  </button>
                </li>
                <li>
                  <button className='dropdown-item' onClick={() => Juegos()}>
                    Juegos
                  </button>
                </li>
                <li>
                  <button className='dropdown-item' onClick={() => Industrial()}>
                    Industrial
                  </button>
                </li>
                <li>
                  <button className='dropdown-item' onClick={() => Ropa()}>
                    Ropa
                  </button>
                </li>
              </ul>
            </li>
          </ul>
          <form onSubmit={handleSubmit} className='d-flex search-form ' role='search'>
            <div className='input-group-search me-2'>
              <input
                className=' me-4 px-5 input-search focus-ring focus-ring-light px-4'
                type='search'
                placeholder='Busca tu producto'
                aria-label='Search'
                name='inputSearch'
              />
              <button
                className='px-1 py-1 fa fa-search icon-search'
                type='submit'
              />
            </div>
          </form>

          <ul className='tx-none me-3  my-auto d-flex nav-links gap-5 '>
            {
            !isAuth
              ? <li className='item'><NavLink to='/login' className='text-decoration-none text-white'>Identificate</NavLink></li>
              : <li className='item cerrar-sesion' onClick={logout}><NavLink to='/login' className='text-decoration-none text-white'>Cerrar Sesión</NavLink></li>

}
            <li className='nav-item '>
              <NavLink
                to='/cart'
                className='fa-solid fa-cart-shopping fa-2x icons ms-3 '
              >

                <span className='cart-count text-center'>{quantity}</span>
              </NavLink>

            </li>
            <li>
              <NavLink className='fa-solid fa-user fa-2x icons ' to='/' />
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
