import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'

function App() {

  return (
    <>
    
      <div className="h-screen relative w-full bg-black">
        <div className=' absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-[1] '>
          
        </div>
        <Navbar/>

        
        <Searchbar/>
       

      </div>
    </>
  )
}

export default App
