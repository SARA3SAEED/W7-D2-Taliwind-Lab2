import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Components/Nav'
import Card from './Components/Card'
import Footer from './Components/Footer'

function App() {

  return (
    <>
     <Nav></Nav>
     <div className="div-card flex flex-wrap	justify-center	">

     <Card></Card>
     <Card></Card>
     <Card></Card>
     <Card></Card>
     </div>

     <Footer></Footer>

    </>
  )
}

export default App
