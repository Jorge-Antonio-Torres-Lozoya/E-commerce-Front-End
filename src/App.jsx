import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import RoutesIndex from './routes/Index'
import { ProductProvider } from './context/ProductContext'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <ProductProvider>
        <Navbar />
        <RoutesIndex />
      </ProductProvider>
      <Footer />
    </>
  )
}

export default App
