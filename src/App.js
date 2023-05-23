import allMovies from './data'
import categories from './categories'
import { useState } from 'react'


const App = () => {

  const [typeOfMovie, setTypeOfMovie] = useState('komedie')

  const vyfiltrovaneFilmy = allMovies.filter((oneMovie) => {
    return oneMovie.category === typeOfMovie
  }) 


  return(
    <div>
      <div>
        {
          categories.map((oneCategorie) => {

            return (
              <button onClick={() => {setTypeOfMovie(oneCategorie)}} className="oneCategorie"> {oneCategorie} </button>
            )
          })
        }
      </div>

      {
        vyfiltrovaneFilmy.map((oneMovie) => {
          const {id, title, tags, age, description, image, category } = oneMovie

          return <div key={id}> 
              <img src={image} className="movieImage"></img>
              <h1 className="movieTitle"> {title} </h1>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
              <p>{category}</p>
             </div>

        })
      }
    </div>
  )
}


export default App