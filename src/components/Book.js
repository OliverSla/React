import './Book.css'
import OrderButton from './OrderButton'


const Book = (props) => {
    return(
        <div className="oneBook">
        <h2 className="mojaH2"> {props.title} </h2>
        <img className="imgKniha" src={props.image}  />
        <OrderButton />
        <hr className="bookLine"></hr>
        </div>
    )
}



export default Book






