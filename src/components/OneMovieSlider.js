import './OneMovieSlider.css'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import allMovies from '../data'
import { useState, useEffect } from 'react'

const OneMovieSlider = () => {

    const [index, setIndex] = useState(0) 

    useEffect( () => {
        if( index < 0){
            setIndex(allMovies.length - 1)
        }else if( index > allMovies.length - 1){
            setIndex(0)
        }
    },[index])


    // Automatické posúvanie

    useEffect( () => {
       let setIntervalID = setInterval(() => {
            setIndex(index + 1)
        }, 3000)

        return () => clearInterval(setIntervalID)
    }, [index])

    return(
        <section className="slider">
            <div className="all_movies_content">
                {
                    allMovies.map((oneMovie, oneMovieIndex) => {
                        const {id, title, description, age, image, tags} = oneMovie

                        let mainClass = "next-slide"

                        if(oneMovieIndex === index){
                            mainClass = "active-slide"
                        }

                        if(oneMovieIndex === index - 1 || index === 0 && oneMovieIndex === allMovies.length - 1){
                            mainClass = "last-slide"
                        }

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

            <button onClick={() => {setIndex( index - 1)}}> <BsFillArrowLeftCircleFill className='sliderBtn' /> </button>
            <button onClick={() => {setIndex(index + 1)}}> <BsFillArrowRightCircleFill className='sliderBtn'/> </button>
                
            </div>
        </section>
    )
}

export default OneMovieSlider