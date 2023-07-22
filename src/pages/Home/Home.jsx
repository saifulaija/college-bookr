import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Navbar/Hero/Hero";
import ResearchPaper from "../../components/ResearchPaper/ResearchPaper";
import PopularColleges from "../PopularColleges/PopularColleges";


const Home = () => {
      return (
            <div>
                  {/* <Hero></Hero> */}
                  <PopularColleges></PopularColleges>
                  <Gallery></Gallery>
                  <ResearchPaper></ResearchPaper>
                  <Feedback></Feedback>
                  <Footer></Footer>
                 
            </div>
      );
};

export default Home;