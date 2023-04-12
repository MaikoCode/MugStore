import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import FloatingCard from './Components/FloatingCart/FloatingCard'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import ShoppingCart from './Pages/ShopppingCart/ShoppingCart'
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase'
import Products from './Pages/Products/Products'
import './App.css'


function App() {


  return (
      <>
        <Navbar />
        <FloatingCard />
        {/* <ShoppingCart /> */}
        <Routes>
          <Route path='/MugStore/' element={<Home />}/>
          <Route path='/produits/' element={<Products />}/>
          <Route path='/produits/:id' element={<ProductShowcase />}/>
          <Route path='/shoppingCart/' element={<ShoppingCart />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </>
  )
}

export default App
