import { useEffect, useState } from "react";
import CollegeCard from "../../components/CollegeCard/CollegeCard";
import Loader from "../../components/Loader/Loader";
import { useNavigation } from "react-router-dom";


const College = () => {

      const [colleges, setColleges] = useState([]);
      const navigation = useNavigation();
  if(navigation.state === 'loading'){
     return <Loader></Loader>
  }


      
  useEffect(() => {
      fetch("http://localhost:5000/colleges")
        .then((res) => res.json())
        .then((data) => setColleges(data));
    }, []);
      
      
      return (
            <div className="md:container mx-auto my-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                              colleges.map(college=><CollegeCard key={college._id} college={college}></CollegeCard>)
                        }
                  </div>
                  
            </div>
      );
};

export default College;