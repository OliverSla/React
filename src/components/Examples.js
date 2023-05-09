import './Examples.css';

const Examples = () => {

    let title = "Môj prvý titulok"

    const buttonHandler = () => {
        console.log(title)
        title = "Nový text"
        console.log(title)
    }


    // destructuring v javascripte 

    const menaHarryPotter = ["Ron", "Harry", "Hermiona"]
    
        const[Ron,Harry,Hermiona] = menaHarryPotter
        console.log(Harry,Ron,Hermiona)
    
    // 

    return(
        <div>
            <h2 className="textColor">{title}</h2>
            <button type="buttin" onClick={ buttonHandler }> Zmeniť titulok </button>
        </div>
    )
}


export default Examples