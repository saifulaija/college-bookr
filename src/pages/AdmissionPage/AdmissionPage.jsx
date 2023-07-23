
import { Link } from 'react-router-dom';

const AdmissionPage = ({college}) => {

      const { collegeName, collegeImage,_id } = college
  const cardStyle = {
    backgroundImage: `url(${collegeImage})`,
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="h-40 bg-cover bg-center" style={cardStyle}></div>
      <div className="px-6 py-4">
        <Link to={`/admission/${_id}`} className="text-xl font-bold mb-2 hover:text-yellow-500">
          {collegeName}
        </Link>
      </div>
    </div>
  );
};

export default AdmissionPage;
