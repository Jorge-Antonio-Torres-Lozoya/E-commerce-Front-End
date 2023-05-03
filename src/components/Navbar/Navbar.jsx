import { useState } from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container'

const Navbar = () => {
  const [nav, setNav] = useState()

  return (
    <>

      <Navbar bg='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              src='/logo.svg'
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  )
}

export default Navbar
