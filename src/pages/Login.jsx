import React from 'react'
import '../styles/login.css'

const Login = () => {
  return (
    <div className='d-flex container-root '>
      <div className=' d-flex container-divs '>
        <div className='container-left d-flex'>
          <div className=' d-flex form-login'>
            <h2>Iniciar sesión</h2>
            <div className='container-form d-flex'>
              <input
                className='input-email px-3'
                type='email'
                placeholder='Correo'
                aria-label='Correo electrónico'
              />
              <input
                className='input-password px-3'
                type='password'
                placeholder='Password'
                aria-label='Password'
              />
            </div>
            <button className='btn btn-login'>Iniciar sesión</button>
          </div>
        </div>

        <div className='container-right d-flex'>
          <div className='container-signup d-flex'>
            <h1 className='text-white text-center frase-signup'>¿Aún no te has registrado? </h1>
            <button className='btn btn-signup'>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
