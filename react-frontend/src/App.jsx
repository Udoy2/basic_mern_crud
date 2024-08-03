import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateComponent from './components/CreateComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <CreateComponent />
      </div>
    </>
  )
}

export default App
