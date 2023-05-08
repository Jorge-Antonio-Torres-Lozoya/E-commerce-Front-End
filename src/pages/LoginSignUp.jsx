import React from 'react'
import { styled } from '@mui/material/styles'
import AccountCircle from '@mui/icons-material/AccountCircle'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import EmailOutlined from '@mui/icons-material/EmailOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import LockOutlined from '@mui/icons-material/LockOutlined'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
// import InputBase from '@mui/material/InputBase'
import '../styles/loginSign.css'

const LoginSignUp = () => {
  const [signIn, setSignIn] = React.useState(false)
  const [rol, setRol] = React.useState('true')
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const handleChange = (event) => {
    setRol(event.target.value)
  }
  const handleSignInClick = () => {
    setSignIn(true)
  }

  const handleSignUpClick = () => {
    setSignIn(false)
  }

  // const toggle = (val) => {
  //   setSignIn(val)
  // }
  const inputStyle = {
    '& label': {
      color: '#E04B1E'
    },
    '&:hover label': {
      color: '#FFAD00'
    },
    '&:focus-within label': {
      color: '#009C78'
    }
  }
  const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E04B1E'
      },
      '&:hover fieldset': {
        borderColor: '#FFAD00'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2ec4b6'
      }
    }
  })
  const inputPassword = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E04B1E'
      },
      '&:hover fieldset': {
        borderColor: '#FFAD00'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2ec4b6'
      }
    }
  }

  return (
    <div id='centro' className='Centro'>
      <div id='con' className='Container '>
        <div id='SignUp' className={`SignUpContainer ${!signIn ? 'SignUpContainer-active' : ''}`}>
          <form id='form' className='Form '>
            <h1 className='Title mb-2'>Registrate</h1>
            <CssTextField
              id='custom-css-outlined-input' label='Nombre' variant='outlined' margin='normal' size='small' InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle sx={{ color: '#009C78' }} />
                  </InputAdornment>
                )
              }}
              sx={inputStyle}
            />
            <CssTextField
              label='Correo electrónico'
              variant='outlined'
              margin='normal'
              type='email'
              size='small'
              InputProps={{
                startAdornment: <EmailOutlined sx={{ color: '#009C78' }} />
              }}
              sx={inputStyle}
            />

            <TextField
              label='Contraseña'
              margin='normal'
              size='small'
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                      sx={{ color: '#009C78' }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockOutlined sx={{ color: '#009C78' }} />
                  </InputAdornment>
                )
              }}
              sx={inputPassword}

            />
            <FormControl sx={{ m: 1, minWidth: 200 }} size='small' className='rol'>
              <CssTextField
                label='¿Que rol prefieres?'
                margin='normal'
                size='small'
                value={rol}
                onChange={handleChange}
                select
                sx={inputStyle}
              >
                <MenuItem value=''>
                  <em>Ninguno</em>
                </MenuItem>
                <MenuItem value={20}>Administrador</MenuItem>
                <MenuItem value={30}>Usuario</MenuItem>
              </CssTextField>
            </FormControl>
            <button className='Button'>Registrar</button>

          </form>
        </div>
        <div id='SignIn' className={` SignInContainer ${!signIn ? 'SignInContainer-active' : ''}`}>
          <form className='Form'>
            <h1 className='Title mb-2'>¡Bievenido!</h1>
            <CssTextField
              label='Correo electrónico'
              variant='outlined'
              margin='normal'
              type='email'
              InputProps={{
                startAdornment: <EmailOutlined sx={{ color: '#009C78' }} />
              }}
              sx={inputStyle}
            />

            <TextField
              label='Contraseña'
              variant='outlined'
              margin='normal'
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(event) => event.preventDefault()}
                      edge='end'
                      sx={{ color: '#009C78' }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockOutlined sx={{ color: '#009C78' }} />
                  </InputAdornment>
                )
              }}
              sx={inputPassword}
            />

            <button className='Button mt-3'>Inicia sesión</button>
          </form>
        </div>
        <div id='overC ' className={`OverlayContainer ${!signIn ? 'OverlayContainer-left' : ''}`}>
          <div id='OverlayQI' className={`Overlay ${!signIn ? 'Overlay-left' : ''}`}>
            <div id='panelIzquierdo' className={`OverlayPanel LeftOverlayPanel ${!signIn ? 'LeftOverlayPanel-active' : ''}`}>
              <h1 className='Title'>Incia sesión</h1>
              <p className='Paragraph'>
                Para que sigas disfrutando de todos nuestros productos
              </p>
              <button className='Button  GhostButton ButtonrH' onClick={handleSignInClick}>
                Iniciar sesión
              </button>
            </div>
            <div id='panelDerecho' className={`OverlayPanel RightOverlayPanel ${signIn ? 'RightOverlayPanel-active' : ''}`}>
              <h1 className='Title'>¡Hola!</h1>
              <p className='Paragraph'>
                Registrate si aún no tienes cuenta
              </p>
              <button className='Button  ButtonrH GhostButton ' onClick={handleSignUpClick}>
                Registrar
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginSignUp
