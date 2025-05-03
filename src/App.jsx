import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FirstlyShowModel from './components/models/FirstlyShowModel'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div className='w-full min-h-screen h-auto'>
    <FirstlyShowModel/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </div>
  )
}

export default App
