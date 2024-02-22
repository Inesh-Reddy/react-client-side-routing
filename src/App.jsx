import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'
import { Title } from './components/Title'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Title />
        <Routes>
          <Route path='/Dashboard' element={<Dashboard />} ></Route>
          <Route path="/" element={< Landing />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}




export default App
