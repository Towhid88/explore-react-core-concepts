import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick() {
    alert ('button 1 clicked')
    
  }
  function handleClick2() {
    alert ('button 2 clicked')
  }
  return (
    <>
      <h1>React Core Concepts</h1>
      <Users></Users>
      <Team></Team>
      <button onClick={handleClick}>Click me 1</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={()=> {alert ('Third button clicked')}}>Click me 3</button>
    
    </>
  )
}

export default App
