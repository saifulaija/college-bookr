

const Feedback = ({item}) => {
   
      const { collegeName, rating, review }=item
  return (
    <div className="bg-gray-100 p-4 shadow-lg rounded-lg mb-4">
      <h2 className="text-xl font-semibold text-green-800 mb-2">{collegeName}</h2>
      <p className="text-gray-600 mb-2">Rating: {rating}</p>
      <p className="text-gray-700">{review}</p>
    </div>
  );
};

export default Feedback;
