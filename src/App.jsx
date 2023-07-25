import React, { useState } from 'react';
import './App.css'

function App() {

  const[counter, setCounter] = useState(0)

  const increase = (event) =>{
    event.preventDefault()
    setCounter(counter + 1)
  }
  const decrease = () =>{
    setCounter(counter - 1)
    
  }
  const reset = () =>{
    setCounter(0)
    
  }
return(
  <div className='App'> 
    <h1 className='App-title'>Simple React Counter</h1>
    <h2 className='App-counter'>{counter}</h2>
  <button className='App-button' type='submit'onClick={increase}>INCREASE</button>
  <button className='App-button' type='submit'onClick={decrease}>DECREASE</button>
  <button className='App-button' type='reset'onClick={reset}>RESET</button>
  </div>
)
}

export default App;
