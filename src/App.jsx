import { useState } from 'react'
import './App.css'
import ColoredUppercaseText from './components/TextComponents/index'
import  Button  from './components/AlertButton/index'

function App() {
  return (
    <>
      <ColoredUppercaseText color="#FFA500" />
      <Button label="Baixar CV" click="Click Here!"/>
    </>
  )
}

export default App
