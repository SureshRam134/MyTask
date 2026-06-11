import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TaskRoute from './route/TaskRoute'
import { ProvideContextData } from './context/ProvideContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ProvideContextData>
          <TaskRoute />
        </ProvideContextData>
      </div>
    </>
  )
}

export default App
