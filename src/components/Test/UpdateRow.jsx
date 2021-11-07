import React, {useContext} from 'react'
import { UserContext } from "../UserContext/UserContext";

const UpdateRow = () => {
    const [users, setUser] = useContext(UserContext);
    const updateData = () => {
        const user = users.filter((user) => user.id == 'id');
        user[0].name = "edited_name";
        user[0].salary = "edited_salary";
        user[0].position = "edited_position";
        console.log(user[0].name)
        setUser([...users])

    }

    return (
        <div>
            <button onClick={updateData}>Update Row</button>
        </div>
    )
}

export default UpdateRow
