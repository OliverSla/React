import { useState, useEffect } from 'react'


const url = 'http://api.open-notify.org/iss-now.json'

const App = () => {

  // Short circuit evalution

  const value ="notEmpty"
  const value2 = 0
  const value3 = false
  const value4 = true
  const value5 = ""

  console.log(value3 && value5 ) // False && False = value3
  console.log(value && value4 ) // True && True = value4
  console.log(value5 && value ) // False && True = value5

  
  console.log(value3 || value5 ) // False && False = value5
  console.log(value5 || value ) // False && True = value
  console.log(value || value4 ) // True && True = value




  return(
    <div>

    </div>
  )
}


export default App