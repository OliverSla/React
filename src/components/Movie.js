import './Movie.css'
import data from '../data'
import DeleteMovieBtn from './DeleteMovieBtn'
import AllDeleteButton from './AllDeleteButton'
import ReloadAllMovie from './ReloadAllMovie'
import { useState } from 'react'

const Movie = () => {

    const [myData, setMyData] = useState(data)

    const deleteOneMovie = (idecko) => {
        const filteredMovies = myData.filter((oneMovie) => {
            return oneMovie.id !== idecko
        })

        setMyData(filteredMovies)
        
    }

    const allDeleteMoviesFunc = () => {
        return setMyData([])
    }

    const reloadAllFunc = () => {
        setMyData(data)
    }


    return(
        <div className="allMovies">
            {
                myData.map((oneMovie) => {
                    
                    const {id, image, title, age, tags, description, } = oneMovie

                    return(
                        <div className="oneMovieWrapper" key={id}>
                        <img src={image}></img>
                        <h1 className="oneMovieTitle"> {title} </h1>
                        <p className="oneMovieText">{age}</p>
                        <p className="oneMovieText">{tags}</p>
                        <p className="oneMovieText">{description}</p>
                        <DeleteMovieBtn deleteMovie={() => deleteOneMovie(id)} />
                        </div>
                    )

                })
            }

            <AllDeleteButton allDelete={allDeleteMoviesFunc}/>
            <ReloadAllMovie reloadAll={reloadAllFunc}/>
        </div>
    )
}

export default Movie