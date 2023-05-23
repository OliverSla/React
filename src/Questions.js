import { useState } from 'react' 

const Question = ({title, info}) => {

    const [showInfo, setShowInfo] = useState(false)


    
    return(
        <div className="questionWrapper">
            <h2>{title}</h2>
            {showInfo && <p>{info}</p>}
            <button onClick={() => {showInfo ? setShowInfo(false) : setShowInfo(true)}}> Zobraziť viac </button>
        </div>
    )
}

export default Question