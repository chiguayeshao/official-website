import React from 'react'
import Faq from './Faq'
import Hero from './Hero'
import Navbar from './Navbar'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Faq />
    </div>
  )
}

export default App