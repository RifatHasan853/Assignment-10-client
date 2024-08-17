import {  useEffect, useState } from "react";
import SortCard from "./SortCard";
import SectionTitle from "./SectionTitle";
import { Helmet } from "react-helmet";



const SportSection = () => {
  //  const loadedPlaces = useLoaderData();
    //const [places, setPlaces] = useState(loadedPlaces);
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/travel')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])
    return (
      <section>
         <Helmet><title> </title></Helmet>

<SectionTitle subHeading="Popular destinations in Europe" heading="Tourists Spots"></SectionTitle>
      
        <div className="container mx-auto py-8 lg:w-full">
     






        <div className="mt-8 grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          places.map(travel => <SortCard
            key={travel._id}
            travel={travel}
            places={places}
           // setCoffees={setPlaces}
          ></SortCard>)
        }
        </div>
      </div>
      </section>
    );
};

export default SportSection;