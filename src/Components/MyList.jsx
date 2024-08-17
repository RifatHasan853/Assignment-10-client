import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const MyList = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {
        // make sure user is confirmed to delete
        fetch(`http://localhost:5000/travel/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('deleted successfully');
                    // remove the user from the UI
                    const remainingUsers = users.filter(travel => travel._id !== id);
                    setUsers(remainingUsers);
                }
            })
    }
    return (
        <div>
            <h2>Users: {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>tourists_spot_name</th>
                            <th>country_Name</th>
                            <th>Location</th>
                            <th>Action</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(travel => <tr key={travel._id}>
                                <th></th>
                                <td>{travel.tourists_spot_name}</td>
                                <td>{travel.country_Name}</td>
                                <td>{travel.location}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(travel._id)} className="btn">X</button>
                                </td>
                                <td>
                                <Link to={`/update/${travel._id}`}>
                    <button className="btn">Edit</button>
                    </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;
