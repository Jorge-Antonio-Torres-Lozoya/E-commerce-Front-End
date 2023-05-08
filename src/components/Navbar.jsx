import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-color '>
      <div className='container-fluid '>
        <Link className='navbar-brand text-white fs-2 py-1 mx-2' to='/'>
          Tonal
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle text-white mx-4'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Categorias
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className='d-flex ' role='search'>
            <div className='input-group-search'>
              <input
                className=' me-4 px-5 input-search'
                type='search'
                placeholder='Busca tu producto'
                aria-label='Search'
              />
              <button className='px-1 py-1 fa fa-search icon-search' type='submit' />
            </div>

          </form>
          <ul className='tx-none mx-4 my-auto navbar-nav gap-4'>
            <li className='nav-item '>
              <button type='button' className='fa-solid fa-cart-shopping fa-2x icons ' />
            </li>
            <li>
              <button type='button' className='fa-solid fa-user fa-2x icons' />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
