import Feedback from "../../components/Feedback/Feedback";

import Gallery from "../../components/Gallery/Gallery";

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
                  
                 
            </div>
      );
};

export default Home;