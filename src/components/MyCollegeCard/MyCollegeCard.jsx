import { Link } from "react-router-dom";


const MyCollegeCard = ({college}) => {


    const  { collegeImage, collegeName, collegeDetails, events, researchHistory, _id } =college
      return (
            <div className="bg-white shadow-md rounded-lg p-4  mx-2 my-4">
      <img
        src={collegeImage}
        alt={collegeName}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h2 className="text-xl font-semibold mt-4">{collegeName}</h2>
      <p className="text-gray-600 text-sm mb-2">
        Admission Date: {collegeDetails}
      </p>
      <p className="text-gray-700 text-sm mb-2">Events: {events}</p>
      <p className="text-gray-700 text-sm mb-2">
        Research History: {researchHistory}
      </p>
      
     <Link to={`/review/${_id}`}> <button
        className="bg-[#33a688] font-semibold hover:bg-yellow-300 text-white rounded-md px-8 py-2 mt-2"
        
      >
       Reviews
      </button></Link>
    </div>
      );
};

export default MyCollegeCard;