import './AllTasks.css'
import data from "../data"

const AllTasks = () => {
    return (
        <div>
            {
                data.map((oneTask) => {
                    const {id, name } = oneTask

                    return (<div className='oneTask' key={id}>
                        <h4> {name} </h4>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default AllTasks