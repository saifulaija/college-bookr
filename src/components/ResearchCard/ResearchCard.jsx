const ResearchCard = ({ research }) => {
  const { title, description, websiteLink, author,imageUrl } = research;
  return (
      <div className="bg-gray-100 p-4 shadow-md rounded-lg mb-4">
      <div className="flex items-center mb-2">
        <img src={imageUrl} alt={`Author ${author}`} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="text-xl font-semibold text-[#33a688] font-serif">
            <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {title}
            </a>
          </h4>
          <p className="text-gray-600">{author}</p>
        </div>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ResearchCard;
