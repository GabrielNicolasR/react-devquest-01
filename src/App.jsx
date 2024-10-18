import { useState } from 'react'
import './App.css'
import ColoredUppercaseText from './components/TextComponents/UppercaseTextColored'
import  Button  from './components/button/button'

function App() {
  return (
    <>
      <ColoredUppercaseText color="#FFA500" />
      <Button label="Baixar CV" click="Click Here!"/>
    </>
  )
}

export default App
