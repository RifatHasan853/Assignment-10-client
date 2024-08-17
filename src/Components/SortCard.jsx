import { Link } from 'react-router-dom';
import 'animate.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
//import Swal from "sweetalert2";


const SortCard = ({travel }) => {
    const { _id, tourists_spot_name, location, short_description,image } = travel;
    
    useEffect(()=>{
        Aos.init({duration:1000});
     },[])
    

   /*  const handleDelete = _id => {
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
                                 'Your Coffee has been deleted.',
                                 'success'
                             )
                             const remaining = places.filter(cof => cof._id !== _id);
                             setPlaces(remaining);
                         }
                     })
 
             }
         })*/

        
    
    return (
        <div >
<div data-aos="zoom-in"  className="card w-80 bg-rose-500 shadow-xl "  >
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title" >  {tourists_spot_name}</h2>
          <p>{location}</p>
          <p>{short_description}</p>
          <div className="card-actions justify-end" >
          <Link to={`/detail/${_id}`} className="btn text-center " style={{ transition: 'all 0.3s', cursor: 'pointer' }}
            onMouseEnter={(e) => { e.target.classList.add('animate__animated', 'animate__shakeX','animate__slow') }}
            onMouseLeave={(e) => { e.target.classList.remove('animate__animated', 'animate__shakeX','animate__slow') }}

>View Details</Link>
          </div>
        </div>
      </div>
      </div>
    );
};

export default SortCard;