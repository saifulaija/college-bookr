import { useEffect, useState } from "react";
import AdmissionPage from "../AdmissionPage/AdmissionPage";


const Admission = () => {

      const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
      return (
            <div className="md:container mx-auto my-10">
                
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                  colleges.map(college=><AdmissionPage key={college._id} college={college}></AdmissionPage>)
            }
          </div>
        
                  
            </div>
      );
};

export default Admission;