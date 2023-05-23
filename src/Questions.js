import { useState } from 'react'
import { CiCircleChevDown } from "react-icons/ci"
import './Questions.css'


const Question = ({title, info}) => {

    const [showInfo, setShowInfo] = useState(false)

        const [active, setActive] = useState(false)


        const handleClick = () => {
            setActive(!active);
          }


    
    return(
        <div className="questionWrapper">
            <h2>{title}</h2>
            {showInfo && <p>{info}</p>}
            <button className='showButton' onClick={() => {showInfo ? setShowInfo(false) : setShowInfo(true); handleClick()}} style={{ backgroundColor: active ? "green" : "white" }}> <CiCircleChevDown className="buttonIcon" /> <br /> Zobraziť viac </button>
        </div>
    )
}

export default Question