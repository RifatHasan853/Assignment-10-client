

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PlaceCard = ({ travel, places, setPlaces }) => {
    const { _id, average_cost, tourists_spot_name,travel_time, totaVisitorsPerYear,image,seasonality } = travel;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/travel/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Sport has been deleted.',
                                'success'
                            )
                            const remaining = places.filter(cof => cof._id !== _id);
                            setPlaces(remaining);
                        }
                    })

            }
        })
    }
 
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={image} alt="Movie" /></figure>
        <div className="flex justify-between w-full pr-4 h-full">
            <div>
                <h2 className="card-title">Tourists_spot_name: {tourists_spot_name}</h2>
                <p>Average_cost:{average_cost}</p>
                <p>Travel_time:{travel_time}</p>
                <p>TotaVisitorsPerYear:{totaVisitorsPerYear}</p>
                <p>Seasonality:{seasonality}</p>
            </div>
            <div className="card-actions justify-end">
                <div className="btn-group btn-group-vertical space-y-4">
                 
                   <Link to={`/update/${_id}`}>
                    <button className="btn">Edit</button>
                    </Link>
                    <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-500">X</button>
                        <Link to={`/detail/${_id}`}>  <button className="btn">Details</button></Link>    
                                       
                </div>
            </div>
        </div>
    </div>
    );
};

export default PlaceCard;