import { Route, 
    createBrowserRouter,
    createRoutesFromElements } from 'react-router-dom'
  
import Home from './src/pages/Home'
import Login from './src/pages/Login'
import Register from './src/pages/Register'
import App from './src/components/App'

import React from 'react'
  
const router = createBrowserRouter(
      createRoutesFromElements(
        <> 
        <Route path="/" element={<App />} >
            <Route index  element={<Home />} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
        </Route>
      </>,
      )
    )

export default router