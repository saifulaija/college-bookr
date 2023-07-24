import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyCollegeCard from "../../components/MyCollegeCard/MyCollegeCard";
import { Helmet } from "react-helmet-async";
import { useNavigation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";


const MyCollege = () => {

      const {user} = useContext(AuthContext)
       
      const [colleges, setColleges] = useState([])

      useEffect(()=>{
            fetch(`http://localhost:5000/booked/${user?.email}`)
            .then(res=>res.json())
            .then(data=> setColleges(data))
      },[user])
      console.log(user.email);

      const navigation = useNavigation();
      console.log(navigation.state);
      if (navigation.state === "loading") {
        return <Loader></Loader>;
      }
      return (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Helmet>
                        <title>My college | College Bookr</title>
                  </Helmet>
                  {
                        colleges.map(college=><MyCollegeCard key={college._id} college={college}></MyCollegeCard>)
                  }
            </div>
      );
};

export default MyCollege;
