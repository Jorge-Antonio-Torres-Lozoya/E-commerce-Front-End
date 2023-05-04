import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import '../styles/signup.css'

const SignUp = () => {
  return (
    <>
      <div className='container'>
        <div className='cuadro-1'>
          <h2 className='inicio'>Iniciar Sesión</h2>
          <FloatingLabel
            controlId='floatingInput'
            label='Correo electrónico'
            className='mb-3'
          >
            <Form.Control type='email' placeholder='name@example.com' />
          </FloatingLabel>
          <FloatingLabel controlId='floatingPassword' label='Contraseña'>
            <Form.Control type='password' placeholder='Password' />
          </FloatingLabel>

          <div className='d-grid gap-2 col-6 mx-auto'>
            <button className='btn btn-primary' type='button'>Button</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default SignUp
