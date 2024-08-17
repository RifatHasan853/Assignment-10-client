
import Swal from 'sweetalert2'
const AddPlace = () => {
    const handleAddTravel = event => {
        event.preventDefault();

        const form = event.target;
        const User_Email = form.email.value;
        const User_Name = form.User_Name.value;
        const tourists_spot_name = form.ourists_spot_name.value;
        const average_cost = form.average_cost.value;
        const country_Name = form.country_Name.value;
        const  location = form.location.value;
        const seasonality = form.seasonality.value;
        const short_description = form.details.value;
        const travel_time=form.travel_time.value;
       const totaVisitorsPerYear=form.quantity.value;
        const  image = form.photo.value;

        const newTravel = {User_Email,User_Name,tourists_spot_name,country_Name, location, image, short_description,average_cost,travel_time,totaVisitorsPerYear,seasonality}

        console.log(newTravel);

        // send data to the server
        fetch('http://localhost:5000/travel', {
            
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTravel)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add  Place</h2>
            <form onSubmit={handleAddTravel}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User_Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="your email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">User_Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="User_Name" placeholder="User_Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">ourists_spot_name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="ourists_spot_name" placeholder="Spot-name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">average_cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="average_cost" placeholder="cost" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                 {/* form supplier row */}
                 <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="location" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" placeholder="seasonality" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">country_Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country_Name" placeholder="country_Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">short_description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="short_description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                 {/* form category and details row */}
                 <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">travel_time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="travel_time" placeholder="travel_time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">totaVisitorsPerYear</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="totaVisitorsPerYear" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add" className="btn btn-block" />

            </form>
        </div>
    );
};

export default AddPlace;