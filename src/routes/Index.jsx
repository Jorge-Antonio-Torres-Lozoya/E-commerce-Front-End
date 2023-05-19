
import Home from '../pages/Home'
import LoginSignUp from '../pages/LoginSignUp'
import { Navigate, Route, Routes } from 'react-router-dom'
import ShoppingCart from '../pages/ShoppingCart'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const RoutesIndex = () => {
  const { isAuth } = useContext(AuthContext)
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/login' element={<LoginSignUp />} />
      <Route path='/cart' element={isAuth ? <ShoppingCart /> : <Navigate to='/login' replace />} />
    </Routes>

  )
}
export default RoutesIndex
