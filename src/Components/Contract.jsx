
import { Helmet } from "react-helmet";
import SectionTitle from "./SectionTitle";



const Contract = () => {
    return (
        <section className="py-10 px-10 mx-auto">
                      <Helmet><title>Contact</title></Helmet>

            
              <SectionTitle subHeading="" heading="Join Us"></SectionTitle>
      
<div className=" min-h-full mx-auto bg-gradient-to-r from-teal-500 via-gray-800 to-teal-600 flex flex-col items-center justify-center p-4">
      
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-400">Name:</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border border-gray-500 rounded-md bg-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-400">Email:</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border border-gray-600 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-400">Message</label>
            <textarea
              className="w-full px-4 py-2 mt-2 border border-gray-600 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 mt-4 text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:outline-none focus:bg-teal-700"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>      
        </section>
 
    );
};

export default Contract;