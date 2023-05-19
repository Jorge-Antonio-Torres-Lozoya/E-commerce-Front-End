import React from 'react'
import { Link } from 'react-router-dom'
import tonal from '../assets/logo-tonal.png'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div>
      <footer className='text white py-4 bg-dark'>
        <div className='container'>
          <nav className='row'>
            <Link to='#' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
              <img src={tonal} alt='logo' className='mx-2' />
            </Link>
            <ul className='col-12 col-md-3 list-unstyled'>
              <li className='font-weight-bol md-2 sub'> Descubre tu destino, abraza tu legado. </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}
export default Footer
