
import Home from '../pages/Home'
import LoginSignUp from '../pages/LoginSignUp'
import { Route, Routes } from 'react-router-dom'
import ShoppingCart from '../pages/ShoppingCart'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/login' element={<LoginSignUp />} />
      <Route path='/cart' element={<ShoppingCart />} />
    </Routes>

  )
}
export default RoutesIndex
