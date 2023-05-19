
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import RoutesIndex from './routes/Index'
import { ProductProvider } from './context/ProductContext'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'

function App () {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <Navbar />
          <RoutesIndex />
        </ProductProvider>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
