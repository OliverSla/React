import './Examples.css';
import { useState } from 'react';

const Examples = () => {

    const [title, setTitle] = useState("Môj prvý titulok");
    console.log(title);
    
    const buttonHandler = () => {
        if(title === "Môj prvý titulok"){
            setTitle("Nový titulok")
        }else{
            setTitle("Môj prvý titulok")
        }
    }
    

    return(
        <div>
            <h2 className="textColor">{title}</h2>
            <button type="buttin" onClick={ buttonHandler }> Zmeniť titulok </button>
        </div>
    )
}


export default Examples