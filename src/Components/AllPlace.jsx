import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PlaceCard from "./PlaceCard";


const AllPlace = () => {
    const loadedPlaces = useLoaderData();
  const [places, setPlaces] = useState(loadedPlaces);
    return (
        <div className='m-20'>
      <h1 className='text-6xl text-center my-20 text-purple-600'> All Tourist Spot: {places.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          places.map(travel => <PlaceCard
            key={travel._id}
            travel={travel}
            places={places}
            setCoffees={setPlaces}
          ></PlaceCard>)
        }
      </div>
    </div>
    );
};

export default AllPlace;