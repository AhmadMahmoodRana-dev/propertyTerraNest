import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FirstlyShowModel from './components/models/FirstlyShowModel'

const App = () => {
  return (
    <div className='w-full min-h-screen h-auto'>
    <FirstlyShowModel/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
