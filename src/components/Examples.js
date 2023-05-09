import './Examples.css';

const Examples = () => {

    const title = "Môj prvý titulok"

    const buttonHandler = () => {
        console.log("Práve si klikol")
    }

    return(
        <div>
            <h2 className="textColor">{title}</h2>
            <button type="buttin" onClick={ buttonHandler }> Zmeniť titulok </button>
        </div>
    )
}


export default Examples