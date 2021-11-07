import React, {useContext} from 'react'
import { UserContext } from "../UserContext/UserContext";

const AddRow = () => {
    const [users, setUser] = useContext(UserContext);
    const addData = () => {
        setUser([...users, {id:"id", name:"name", position:"position", salary:"salary"}])
    }
    return (
        <div>
            <button onClick={addData}>Add Row</button>
        </div>
    )
}

export default AddRow
