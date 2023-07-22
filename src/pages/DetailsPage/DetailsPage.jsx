import { useLoaderData } from "react-router-dom";


const DetailsPage = () => {
      const college = useLoaderData()
      console.log(college);
      const {
            collegeImage,
            collegeName,
            events,
            admissionDate,
            researchHistory,
            admissionProcess,
            eventsDetails,
            researchWorks,
            sportsCategories,
            sports,
            
          } = college;
      return (
            <div className="bg-white shadow-md rounded-lg p-4 md:container mx-auto">
      <img src={collegeImage} alt={collegeName} className="w-full h-[400px] object-cover rounded-t-lg" />
      <h2 className="text-xl font-semibold mt-4">{collegeName}</h2>
      <p className="text-gray-600 text-sm mb-2">Admission Date: {admissionDate}</p>
      <h3 className="text-lg font-semibold mt-4">Admissions Process:</h3>
      <p className="text-gray-700 text-sm mb-2">{admissionProcess}</p>
      <h3 className="text-lg font-semibold mt-4">Events Details:</h3>
      <p className="text-gray-700 text-sm mb-2">{eventsDetails}</p>
      <h3 className="text-lg font-semibold mt-4">Research Works:</h3>
      <p className="text-gray-700 text-sm mb-2">{researchWorks}</p>
      <h3 className="text-lg font-semibold mt-4">Sports:</h3>
      <p className="text-gray-700 text-sm">{sports}</p>
      <h3 className="text-lg font-semibold mt-4">Sports Categories:</h3>
      <p className="text-gray-700 text-sm">{sportsCategories}</p>
    </div>
      );
};

export default DetailsPage;