
import { Route, Routes } from 'react-router-dom'
import React from 'react'

import {RoutesEnum} from './routes/index'

const Home = React.lazy(() => import("./pages/Home"))
const Register = React.lazy(() => import("./pages/Register"))
const Login = React.lazy(() => import("./pages/Login"))

import { Suspense } from 'react'

function App() {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path={RoutesEnum.Register} element={<Register />} />
      <Route path={RoutesEnum.Login} element={<Login />} />
      <Route path={RoutesEnum.Home} element={<Home />} /> 
      <Route path={RoutesEnum.NotFound} element={<div>Not Found</div>} />
    </Routes>
    </Suspense>
    </>
  )
}

export default App
