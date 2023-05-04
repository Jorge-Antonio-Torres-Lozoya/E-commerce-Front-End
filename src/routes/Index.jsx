import Login from '../pages/Login'
import { Route, Routes } from 'react-router-dom'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
    </Routes>

  )
}
export default RoutesIndex
