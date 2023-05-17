import { useState, useEffect } from 'react'

const App = () => {

  const [number, setNumber] = useState(0)
  const [title, setTitle] = useState(0)

  const count = () => {
    const result = number + 1
    setNumber(result)
  }


  useEffect(() => {
    const btn = document.querySelector('.tlacitko')
    if(number > 0 ){
      btn.textContent = `kliknuté ${number} krát`
    }else{
      btn.textContent = "klikni"
    }
    console.log(btn)
    
  },[number])
  
  const titleChange = () => {
    const result = title + 1
    document.title = ("titulok kliknutý " + result + " krát")
    setTitle(result)
  }
  useEffect(() => {    

    console.log("bolo kliknuté na TITLE")

  },[title])

  return (
  <div className="">
    <h2> {number} </h2>
    <button className="tlacitko" onClick={count}>Klikni</button>
    <button className="tlacitkoTitle" onClick={titleChange}>Zmeň titulok</button>
  </div>
  )
}


export default App