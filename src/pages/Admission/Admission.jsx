import { useEffect, useState } from "react";
import AdmissionPage from "../AdmissionPage/AdmissionPage";
import { Helmet } from "react-helmet-async";
import { useNavigation } from "react-router-dom";
import Loader from "../../components/Navbar/Loader/Loader";


const Admission = () => {

      const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  const navigation = useNavigation()
  console.log(navigation.state)
  if (navigation.state === 'loading') {
    return <Loader></Loader>
  }
      return (
            <div className="md:container mx-auto my-10">
              <Helmet>
                        <title>Admission | CollegeBookr</title>
                  </Helmet>
                
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                  colleges.map(college=><AdmissionPage key={college._id} college={college}></AdmissionPage>)
            }
          </div>
        
                  
            </div>
      );
};

export default Admission;