import './AllTasks.css'
import data from "../data"
import { useState } from 'react'

const AllTasks = () => {

    const [myNewData, setMyNewData] = useState(data)


   const deleteOneTask = (idecko) => {
    const filteredData = myNewData.filter((oneTask) => {
        return oneTask.id !== idecko
    })
    setMyNewData(filteredData)
   }


   const deleteAllTasks = () => {
    setMyNewData([])
   }

    return(
        <div>
            {
                myNewData.map((oneTask) => {


                    const {id, name} = oneTask

                    return <div className="oneTask" key={id}>
                        <h2> {name} </h2>
                        <button className="delete" onClick={ () => deleteOneTask(id) }> Vymazať task </button>
                     </div>
                })
            }

            <button className="delete" onClick={ deleteAllTasks }> Vymazať task </button>
        </div>
    )
}

export default AllTasks