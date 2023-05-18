import { useState, useEffect } from 'react'


const url = 'http://api.open-notify.org/iss-now.json'

const App = () => {

  // Short circuit evalution

  const error = true



  return(
    <div>
      {
        error ? <h1> Nastala chyba </h1> : <h1> Bez chyby </h1>
      }
    </div>
  )
}


export default App