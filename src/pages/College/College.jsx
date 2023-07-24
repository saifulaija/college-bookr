import { useEffect, useState } from "react";
import CollegeCard from "../../components/CollegeCard/CollegeCard";

import { useNavigation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/Loader/Loader";


const College = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }
  return (
    <div className="md:container mx-auto my-10">
      <Helmet>
        <title>College | College Bookr</title>
      </Helmet>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default College;
