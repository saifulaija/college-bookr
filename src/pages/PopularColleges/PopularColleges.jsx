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
     {/* <div className="flex items-center justify-center">
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
     </div> */}


      {/* new hero start */}
      <div className="bg-[#33a688] py-16 px-4 text-center">
      <h1 className=" text-xl md:text-4xl font-bold text-white mb-6 font-serif text-yellow-500">
        Welcome to CollegeBookr
      </h1>
      <div className="max-w-sm mx-auto">
        <div className="relative text-gray-600">
          <input
            type="search"
            name="search"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for your desired college..."
            className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
          <button onClick={handleSearch} type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <FiSearch className="h-4 w-4" /> 
          </button>
        </div>
      </div>
    </div>
      {/* new hero end */}

      <div className="mt-10 container mx-auto">
        
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
