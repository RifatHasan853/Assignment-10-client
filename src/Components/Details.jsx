


import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";




const Details = ()=>{
  const travel = useLoaderData();
    const {short_description,country_Name, average_cost, tourists_spot_name,image,seasonality } = travel;
   
    
    return (
        <div className="hero min-h-screen bg-cyan-200 ">
           
        <Helmet>
             <meta charSet="utf-8" />
             <title>Hotel||Details</title>
             <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
   
    <div className="hero-content gap-32 flex-col lg:flex-row ">
    
  
    <img src={image} className=" h-[350px]  w-[600px] " />
    <div className="">
    <h3 className="text-4xl font-bold text-rose-700">{tourists_spot_name}</h3>
      <p className="py-4 text-xl font-bold ">{short_description}</p>
      <div className="flex gap-8 py-4">
        <p className="text-xl font-bold" >Avarage cost: {average_cost}</p>
        <p className="text-xl font-bold"> Seasonality : {seasonality }</p>
   
      </div>
      <div className="flex  gap-12 py-4">
   <p className="text-xl font-bold">Country: {country_Name}</p>

   </div>
   </div>
   
   </div> 
   

</div>
    );
};

export default Details;