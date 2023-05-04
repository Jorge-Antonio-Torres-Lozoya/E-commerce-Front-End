import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import RoutesIndex from './routes/Index'
import SignUp from './components/SignUp'
function App () {
  return (
    <>
      <Navbar />
      <SignUp />
      <RoutesIndex />
    </>
  )
}

export default App
