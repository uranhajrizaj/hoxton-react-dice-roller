import { useState } from 'react'

import './App.css'

function App() {

  const[showNumber,setshowNumber] = useState(0)
   
  function rollDie() {
    const random = Math.floor(Math.random() * 6) +1
    setshowNumber(random)
  }


  return (
    <div className="App">
      <div className="coin">
        <h1>Dice Roller</h1>
         <h1>{showNumber}</h1>
         <div className='result'>
         <button onClick={rollDie}>Roll</button>
         </div>
      
      </div>
       
    </div>
  )
}

export default App
