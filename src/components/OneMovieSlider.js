import './OneMovieSlider.css'
import allMovies from '../data'
import { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";


const OneMovieSlider = () => {

    const [index, setIndex] = useState(0)
    const {id, title, image, age, tags, description} = allMovies[index]

    const nextMovie = () => {
        if(index < allMovies.length -1){
            setIndex(index + 1)
        }else{
            setIndex(0)
        }
    }

    const prevMovie = () => {
        if(index > 0){
            setIndex(index - 1)
        }else{
            setIndex(allMovies.length - 1)
        }
    }

    return (
        <div key={id}>
            <img src={image} />
            <h2> {title} </h2>
            <h4> ID: {id} </h4>
            <h3> {age} </h3>
            <h3> {tags} </h3>
            <p> {description} </p>
            <button onClick={() => {prevMovie()}}>
                <BsFillArrowLeftCircleFill className='btnIcons' />
            </button>
            <button onClick={() => {nextMovie()}}>
                <BsFillArrowRightCircleFill className='btnIcons' />
            </button>
        </div>
    )
}

export default OneMovieSlider