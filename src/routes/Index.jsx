import LoginSignUp from '../pages/LoginSignUp'
import { Route, Routes } from 'react-router-dom'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginSignUp />} />
    </Routes>

  )
}
export default RoutesIndex
