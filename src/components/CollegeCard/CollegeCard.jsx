
import { RiInformationLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CollegeCard = ({college}) => {
      const { collegeImage, collegeName, collegeDetails, _id } = college;
  return (
      <div className="bg-white rounded-lg shadow-lg">
      <img src={collegeImage} alt={collegeName} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{collegeName}</h2>
        <p className="text-gray-600">{collegeDetails}</p>
      </div>
      <div className="flex justify-center bottom-0 p-4">
        <Link to={`/colleges/${_id}`}><button className="bg-[#33a688] hover:opacity-70 text-white px-4 py-2 rounded-lg flex items-center">
          <RiInformationLine className="mr-2" />
          Details
        </button></Link>
      </div>
    </div>
  );
};

export default CollegeCard;
