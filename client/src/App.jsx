import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Userlayout from './Components/Layout/Userlayout'
import Home from './Pages/Home'
import {Toaster} from "sonner"
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import Collectionpage from './Pages/Collectionpage'
import ProductDetails from './Components/Products/ProductDetails'
import Checkout from './Components/Cart/Checkout'
const App = () => {
  return (<>

    <BrowserRouter >
    <Toaster position="top-right" />
      <Routes>
        <Route path='/' element={<Userlayout />}>
          {/* user layout */}
          <Route index element={<Home/>} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='collections/:collection' element={<Collectionpage/>} />
          <Route path='product/:id' element={<ProductDetails/>} />
          <Route path='checkout' element={<Checkout/>} />
        </Route>
        <Route>
          {/* admin layout */}
        </Route>


      </Routes>
    </BrowserRouter>

  </>
  )
}

export default App