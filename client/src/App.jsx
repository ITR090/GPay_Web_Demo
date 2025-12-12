import { useState, useEffect } from 'react'
// route
import { RouterProvider } from 'react-router-dom'
import { routers_definitions } from './routes/index'

function App() {

  return (
    <>
      <RouterProvider router={routers_definitions} />
    </>
  )
}

export default App
