import React from 'react'
import Navbar from './components/navbar/Navbar'
import Classwork from './components/navbar/classwork/Classwork'
import Footer from './components/footer/Footer'
import Project from './components/project/Project'

function App() {
  return (
    <>
      <div>
        {/* <h1>Welcome to react class.</h1> */}
        <Navbar />
        <Classwork/>
        <Project />
        <Footer />
      </div>
    </>
  )
}

export default App
