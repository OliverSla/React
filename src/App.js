import { useState, useEffect } from 'react'
import Book from './components/Book'


const App = () => {

  const [visibility, setVisibility] = useState(true)



  return(
    <div>
      <button onClick={() => setVisibility(!visibility)}> show / hide </button>
      {visibility && <Book />}

    </div>
  )
}


export default App