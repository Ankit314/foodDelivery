import { useState } from 'react'
 
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/footer/Footer'
import LoginPopup from './components/loginpopup/LoginPopup'
import Verify from './pages/verify/Verify'

function App() {
  const [showLogin,setShowLogin]=useState(false)
   

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/placeOrder' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>

      </Routes>
      
      
    </div>
    <Footer/>
    
    </>
  )
}

export default App
