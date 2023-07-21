import { Link } from "react-router-dom";
import image1 from "../../../public/errorpage.jpg";

const Error = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img src={image1} alt="" />
       <div className="text-center">
       <Link  to='/'>
        
        <button className="bg-yellow-500 px-2 rounded-lg text-xl py-1 text-white font-semibold ">Back To Home</button>
      
      </Link>
       </div>
      </div>
    </div>
  );
};

export default Error;
