
import AccountCircle from '@mui/icons-material/AccountCircle'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import EmailOutlined from '@mui/icons-material/EmailOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import LockOutlined from '@mui/icons-material/LockOutlined'
import '../styles/loginSign.css'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import { loginUserServices, registerUserServices } from '../services/userServices'
import useForm from '../hooks/useForm'
import React, { useContext, useMemo } from 'react'
import { toast } from 'react-toastify'

const LoginSignUp = () => {
  const [signIn, setSignIn] = React.useState(false)
  // const [rol, setRol] = React.useState('true')
  const [showPassword, setShowPassword] = React.useState(false)

  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext)

  const sendData = async (data) => {
    try {
      const result = await loginUserServices(data)
      console.log(result.data.token)
      if (result.status === 200) {
        loginUser(result.data.token)
        console.log(result.data)
        navigate('/')
      }
    } catch (err) {
      toast.error(' Correo o contraseña incorrecta', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      console.log('Ocurrio un erron en Login: ' + err.message)
    }
  }
  const sendDataSignUp = async (data) => {
    console.log(data)
    if (!data.role) {
      data.role = 'customer'
    }
    const result = await registerUserServices(data)
    if (result.status === 201) {
      toast.success(' Usuario registrado con éxito, favor de iniciar sesión', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
    }

    console.log(result.data)
  }
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })
  const { input: signUpInput, handleInputChange: handleSignUpInputChange, handleSubmit: handleSignUpSubmit } = useForm(sendDataSignUp, {
    name: '',
    email: '',
    password: ''
  })

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
  const textField = useMemo(() => (
    <TextField
      label='Correo electrónico'
      variant='outlined'
      margin='normal'
      type='email'
      name='email'
      value={input.email}
      onChange={handleInputChange}
      InputProps={{
        startAdornment: <EmailOutlined sx={{ color: '#009C78' }} />
      }}
      sx={inputStyle}
    />
  ), [input.email, handleInputChange])
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const handleSignInClick = () => {
    setSignIn(true)
  }

  const handleSignUpClick = () => {
    setSignIn(false)
  }

  // const CssTextField = styled(TextField)({
  //   '& .MuiOutlinedInput-root': {
  //     '& fieldset': {
  //       borderColor: '#E04B1E'
  //     },
  //     '&:hover fieldset': {
  //       borderColor: '#FFAD00'
  //     },
  //     '&.Mui-focused fieldset': {
  //       borderColor: '#2ec4b6'
  //     }
  //   }
  // })
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
      <div id='con' className='Container  container-responsive '>
        <div id='SignUp' className={`SignUpContainer ${!signIn ? 'SignUpContainer-active' : ''}`}>
          <form id='form ' className='Form formSignUp' onSubmit={handleSignUpSubmit}>
            <h1 className='Title mb-2'>Registrate</h1>
            <TextField
              id='custom-css-outlined-input' label='Nombre' variant='outlined' margin='normal' size='small' InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle sx={{ color: '#009C78' }} />
                  </InputAdornment>
                )
              }}
              // sx={inputStyle}
              name='name'
              value={signUpInput.name}
              onChange={handleSignUpInputChange}

            />
            <TextField
              label='Correo electrónico'
              variant='outlined'
              margin='normal'
              type='email'
              size='small'
              InputProps={{
                startAdornment: <EmailOutlined sx={{ color: '#009C78' }} />
              }}
              sx={inputStyle}
              name='email'
              value={signUpInput.email}
              onChange={handleSignUpInputChange}
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
              name='password'
              value={signUpInput.password}
              onChange={handleSignUpInputChange}

            />
            <button className='Button'>Registrar</button>

          </form>
        </div>
        <div id='SignIn' className={` SignInContainer ${!signIn ? 'SignInContainer-active' : ''}`}>
          <form className='Form' onSubmit={handleSubmit}>
            <h1 className='Title mb-2'>¡Bievenido!</h1>
            {textField}
            <TextField
              label='Contraseña'
              variant='outlined'
              margin='normal'
              name='password'
              value={input.password}
              onChange={handleInputChange}
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
