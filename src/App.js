import { useState, useEffect } from 'react'

const App = () => {

const [windowSize, setWindowSize] = useState(window.innerWidth)


const windowSizeFunc = () => {
  setWindowSize(window.innerWidth)
}


useEffect( () => {
  console.log("cleanUp function")
  window.addEventListener('resize', windowSizeFunc)
  return () => {
    window.removeEventListener('resize', windowSizeFunc)
  }
})



  return (
  <div className="">
    <h1> Šírka obrazovky </h1>
    <p> {windowSize} </p>
  </div>
  )
}


export default App