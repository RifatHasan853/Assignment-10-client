import Carousel from "./Carousel";
import Contract from "./Contract";
import CountryName from "./CountryName";
import SportSection from "./SportSection";


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <CountryName></CountryName>
            <SportSection></SportSection>
            <Contract></Contract>
        </div>
    );
};

export default Home;