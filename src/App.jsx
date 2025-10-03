import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SprintVelocityTracker from './components/SprintVelocityTracker'

function App() {
  const [count, setCount] = useState(0)

  return (
   <SprintVelocityTracker/>
  )
}

export default App
