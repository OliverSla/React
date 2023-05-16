import DecreaseButton from "./components/DecreaseButton"
import IncreaseButton from "./components/IncreaseButton"
import ResetButton from "./components/ResetButton"
import { useState } from 'react'

const App = () => {

  const [myValue, setValue] = useState(0)

  const increaseNumber = () => {
    const valueResult = myValue + 1 
    setValue(valueResult)
  } 

  const decreaseNumber = () => {
    const valueResult = myValue - 1 
    setValue(valueResult)
  } 

  const resetNumber = () => {
    const valueResult = 0
    setValue(valueResult)
  }

  return (
  <div className="">

    <h1> Počítadlo </h1>
    <h2> {myValue} </h2>
    <DecreaseButton decreseNumber={decreaseNumber}/>
    <IncreaseButton increaseNumber={increaseNumber}/>
    <ResetButton resetNumber={resetNumber}/>
  </div>
  )
}


export default App