import { useState, useEffect } from 'react'


const App = () => {

  const url = 'http://api.open-notify.org/iss-now.json'

  const [latitude, setLatitude] = useState("0")
  const [longitude, setLongitude] = useState("0")
  const [urlMap, setUrlMap] = useState("")

  const getCoordinate = async () => {
    const getData = await fetch(url)
    const getDataToJSON = await getData.json()
    setLatitude(getDataToJSON["iss_position"]["latitude"])
    setLongitude(getDataToJSON["iss_position"]["longitude"])
    const iss_long = getDataToJSON["iss_position"]["latitude"]
    const iss_lat = getDataToJSON["iss_position"]["longitude"]
    setUrlMap(`https://sk.mapy.cz/zakladni?x=${iss_long}&y=${iss_lat}&z=5`)
  }

  useEffect(() => {
    getCoordinate()
  }, [])


  return (
  <div className="">
      <h2> API </h2>
      <p> {latitude} </p>
      <p> {longitude} </p>
      <p> {urlMap} </p>
      <a href={urlMap} target="_blank">
        <button> Klikni pre zobrazenie polohy</button>
      </a>
  </div>
  )
}


export default App