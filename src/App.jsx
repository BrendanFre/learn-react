import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)
  const name = "Brad";

  return (
    <div className="container">
      <Header />
      <h1>Hello from React</h1>
      <h2>This is a H2</h2>
      <h3>Hi {name}</h3>
    </div>
  )
}

export default App
