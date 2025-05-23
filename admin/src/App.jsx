import React from 'react'
import Navebar from './components/navbar/Navebar'
import Sidebar from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/add/Add'
import List from './pages/list/List'
import Order from './pages/orders/Order'
import { ToastContainer  } from 'react-toastify'

const App = () => {
  const url = "http://localhost:4000"
  return (
    <div> 
      <ToastContainer/>
      <Navebar/>
      <hr />
      <div className='app-content'>
        <Sidebar/>

        <Routes>
          <Route path='/add' element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/order' element={<Order url={url}/>}/>
          

        </Routes>

         

      </div>

    </div>
  )
}

export default App