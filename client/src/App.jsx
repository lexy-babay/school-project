import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './components/Home'
// import Landing from './components/Landing'
import Homecomponent from './components/Homefolder/Homecomponent'
import Header from './components/Header'


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' element={<Homecomponent/>}></Route>
      </Routes>
    </Router>
  )

}

export default App