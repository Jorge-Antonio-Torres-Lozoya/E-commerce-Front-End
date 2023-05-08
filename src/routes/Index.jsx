import Home from '../pages/Home'
import Login from '../pages/Login'
import { Route, Routes } from 'react-router-dom'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>

  )
}
export default RoutesIndex
