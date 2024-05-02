/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
  Link,
  NavLink
} from 'react-router-dom'

// Layouts
import RootLayout from './layouts/RootLayout'


// Pages
import Home from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />}>
    <Route
      index
      element={<Home />}
    />
    <Route
      path='/createpost'
      element={<Home />}
    />
    <Route />
  </Route>
  ))

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
