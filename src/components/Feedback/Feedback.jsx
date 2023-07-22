import { useEffect, useState } from "react";
import FeedbackCard from "../FeedbackCard/FeedbackCard";


const Feedback = () => {

      const [feedbacks, setFeedbacks] = useState([])


      
  useEffect(()=>{
      fetch('http://localhost:5000/feedback')
      .then(res=>res.json())
      .then(data=>setFeedbacks(data))
},[])
      return (
            <div className="w-full md:container mx-auto">
                  <h1 className='text-xl md:text-2xl lg:text-3xl text-center text-[#33a688] my-10 font-bold mt-10 uppercase'>Students Feedback</h1>
                  <div className="grid md:grid-cols-3 gap-4">
                        {
                              feedbacks.map(item=><FeedbackCard key={item._id} item={item}></FeedbackCard>)
                        }
                  </div>
                  
            </div>
      );
};

export default Feedback;
