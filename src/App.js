import './App.css'
import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import Section1 from './Components/Section1'
import Cards from './Components/Cards'
import About from './Components/About'
import Blog from './Components/Blog'
// import Test from './Components/Test'
// import Contact from './Components/Contact'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Section1 />
        <Cards />
        <About />
        <Blog />
        {/* <Test />
        <Contact />  */}
      </Router>
    </>
  )
}

export default App
