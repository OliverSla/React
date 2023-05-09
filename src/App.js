import data from './data'


const App = () => {

  // javascript function map

    const mojePole = [1,5,10,]

    const vyslednePoleMap = mojePole.map( (jednoPole) => {
      return jednoPole + 10
    } )

    console.log(vyslednePoleMap[0]) // result = 11 
    console.log(vyslednePoleMap[1]) // result = 15 
    console.log(vyslednePoleMap[2]) // result = 20 

    const noveData = data.map( (jednaUloha) => {
      return jednaUloha.name
    })

    console.log(noveData)

  // javascript end - map
  
  // javascript function filter


  const vymazaneID = 2

  const vyslednePoleFilter = data.filter( (jednoPole) => {
    return jednoPole.id != vymazaneID
  })
  
  console.log(vyslednePoleFilter) // vráti všetky polia okrem pola s ID $vymazaneID

  // javascript end - filter 


  return (
  <div className="">
    
  </div>
  )
}


export default App