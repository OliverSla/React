import './OneMovieSlider.css'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import allMovies from '../data'
import { useState, useEffect } from 'react'

const OneMovieSlider = () => {

    const [index, setIndex] = useState(0) 

    return(
        <section className="slider">
            <div className="all_movies_content">
                {
                    allMovies.map((oneMovie, oneMovieIndex) => {
                        const {id, title, description, age, image, tags} = oneMovie

                        let mainClass = "next-slide"

                       return <div key={id} className={"one_movie " + mainClass}>
                        <img src={image} />
                        <h4> ID: {id} </h4>
                        <h4> Index: {oneMovieIndex} </h4>
                        <h3> {title} </h3>
                        <h4>{age}</h4>
                        <h4>{tags}</h4>
                        <p>{description}</p>
                       </div>
                    })
                }
            </div>
            <div className="btns">

            <button> <BsFillArrowLeftCircleFill className='sliderBtn' /> </button>
            <button> <BsFillArrowRightCircleFill className='sliderBtn'/> </button>
                
            </div>
        </section>
    )
}

export default OneMovieSlider