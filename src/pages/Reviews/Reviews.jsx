import { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const Reviews = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const college = useLoaderData();
  const { collegeName, _id } = college;
  console.log(college);
  const navigate = useNavigate();

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const update = { review, rating, collegeName };
    fetch(`http://localhost:5000/feedback/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("feedback send successful");
        navigate("/my-college");
      });
  };

  return (
    <form
      className="bg-white shadow-lg md:w-1/2 md:container mx-auto my-10 rounded-lg p-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
      <div className="mb-4">
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-700"
        >
          Your Rating
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={rating}
          onChange={handleRatingChange}
          min="1"
          max="5"
          required
          className="block w-16 border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
          placeholder="1-5"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="review"
          className="block text-sm font-medium text-gray-700"
        >
          Your Review
        </label>
        <textarea
          id="review"
          name="review"
          value={review}
          onChange={handleReviewChange}
          rows={6}
          className="block w-full border border-gray-300 rounded-lg p-2 resize-none focus:ring focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
          placeholder="Write your review here..."
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Submit Review
      </button>
    </form>
  );
};

export default Reviews;
