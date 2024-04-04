import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Navbar, Footer} from './index.js'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
