import { useEffect, useState } from "react";
import SingleCollege from "../../components/SingleCollege/SingleCollege";
import { FiSearch } from "react-icons/fi";

const PopularColleges = () => {
  const [searchText, setSearchText] = useState("");
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/colleges/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  };

  return (
    <div className="w-full">
     <div className="flex items-center justify-center">
     <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search colleges"
            className="input bg-gray-100 border border-gray-300 rounded-l-lg focus:ring focus:ring-blue-300 focus:bg-white"
          />
          <button
            onClick={handleSearch}
            className="btn btn-square bg-[#33a688] text-white rounded-r-lg hover:bg-blue-600"
          >
            <FiSearch className="h-6 w-6" />
          </button>
        </div>
      </div>
     </div>
      <div className="mt-20 container mx-auto">
        <h1 className="text-xl md:text-3xl lg:text-4xl text-center text-[#33a688] font-bold uppercase">
          Popular Colleges
        </h1>
        <div className="grid md:grid-cols-3">
          {colleges.slice(0, 3).map((college) => (
            <SingleCollege key={college._id} college={college}></SingleCollege>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularColleges;
