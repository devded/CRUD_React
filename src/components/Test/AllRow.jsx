import React, {useContext} from 'react'
import { UserContext } from "../UserContext/UserContext";

const AllRow = () => {
    const [users, setUser] = useContext(UserContext);
    const read_data = () => {
        console.log(users)
    }
    return (
        <div>
            <button onClick={read_data}>All Rows</button>
        </div>
    )
}

export default AllRow
