import { useState, useEffect } from 'react'

const App = () => {

  const url = "https://api.kanye.rest/"

  const [quote, setQuote] = useState("Prvý text")

  const getQuote = async () => {
    
    const response = await fetch(url)
    const myData = await response.json()
    console.log(myData['quote'])
    setQuote(myData['quote'])
  }

  
  useEffect(() => {
    getQuote() 
  }, [])


  return (
  <div className="">
    <h2> {quote} </h2>
  </div>
  )
}


export default App