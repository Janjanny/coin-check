import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'

function App() {

  return (
    <>
      <div className="bg-black h-screen">
        <Navbar/>
        <Searchbar/>

      </div>
    </>
  )
}

export default App
