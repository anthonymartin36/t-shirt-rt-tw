import { Route, 
    createBrowserRouter,
    createRoutesFromElements } from 'react-router-dom'
  
import Home from './src/pages/Home'
import Login from './src/pages/Login'
import Register from './src/pages/Register'
import App from './src/components/App'
import React from 'react'
import Product from './src/pages/Product'
import Cart from './src/pages/Cart'
import Wishlist from './src/pages/Wishlist'

const router = createBrowserRouter(
      createRoutesFromElements(
        <> 
        <Route path="/" element={<App />} >
            <Route index  element={<Home />} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
            <Route path="Products/:id" element={<Product />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="Wishlist" element={<Wishlist />} />
        </Route>
      </>,
      )
    )

export default router