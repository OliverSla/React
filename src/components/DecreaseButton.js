import './DecreaseButton.css'

const DecreaseButton = (props) => {


    return(
        <div>
            <button onClick={props.decreseNumber}> -1 </button>
        </div>
    )
}

export default DecreaseButton