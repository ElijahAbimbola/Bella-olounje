import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Food from './Components/Food'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      < Navbar />
      < Food />
   </div>
        
    </>
  )
}

export default App
