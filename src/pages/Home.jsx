import Banner from "../components/Banner";
import SectionOne from "../components/SectionOne";
import About from "./About";
import Contacts from "./Contacts";
import Gallery from "./Gallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <About></About>
          <Gallery></Gallery>
          <SectionOne></SectionOne> 
          <Contacts></Contacts>
        </div>
    );
};

export default Home;