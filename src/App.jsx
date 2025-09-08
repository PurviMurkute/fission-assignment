import React from 'react'
import { Routes, Route } from 'react-router'
import Hero from './views/Hero'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Hero />}></Route>
    </Routes>
  )
}

export default App

