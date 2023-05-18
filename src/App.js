import { useState, useEffect } from 'react'


const url = 'http://api.open-notify.org/iss-now.json'

const App = () => {

  const [loading, setLoading] = useState(false)
  const [latitude, setLatitude] = useState('default')
  const [longitude, setLongitude] = useState('default')

  useEffect(() => {
      fetch(url)
          .then((response) => response.json())
          .then((data) => data['iss_position'])
          .then((data) => {
            const longitude = (data['longitude'])
            const latitude = (data['latitude'])
            setLatitude(latitude)
            setLongitude(longitude)
          }) 
          setLoading(true)
  }, [])

      {
        if(loading === true){
          return <div> <h1>Stránka načítana </h1> <h2> {latitude} </h2> </div>
        }else{
          return <div> <h1> Stránka sa načítava </h1> <h2> {longitude} </h2> </div>
        }
      }

}


export default App