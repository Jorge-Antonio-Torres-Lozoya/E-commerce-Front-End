import React from 'react'
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-color '>
      <div className='container-fluid'>
        <a className='navbar-brand text-white fs-2' href='#'>
          Tonal
        </a>
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
                className='nav-link dropdown-toggle text-white mx-3'
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
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
          <ul className='tx-none mx-4 my-auto navbar-nav gap-5'>
            <li className='nav-item '>
              <i className='fa-solid fa-cart-shopping fa-2x ' />
            </li>
            <li>
              <i className='fa-solid fa-user fa-2x' />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar