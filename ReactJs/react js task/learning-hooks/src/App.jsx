import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addCounter = () => {
    if (counter <= 20) {
      setCounter(++counter);      
    }
  }

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(--counter);      
    }
  }

  return (
    <>
      <h1>Muhammad Shabbir</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addCounter}>Add Value</button>
      <button onClick={decreaseCounter}>Decrease Value</button>
    </>
  )
}

export default App
