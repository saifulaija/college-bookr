import  { useEffect, useState } from 'react';
import ResearchCard from '../ResearchCard/ResearchCard';

const ResearchPaper = () => {

  const [researches, setResearches] = useState([])

  
  useEffect(()=>{
      fetch('http://localhost:5000/research')
      .then(res=>res.json())
      .then(data=>setResearches(data))
},[])


      return (
            <div className='w-full md:container md:mx-auto mt-10'>
                   <h1 className='text-xl md:text-2xl lg:text-3xl text-center text-yellow-500 font-bold my-10 uppercase'>Students Research Paper</h1>
                   <div className='grid md:grid-cols-3 gap-4'>
                        {
                              researches.map(research=><ResearchCard key={research._id} research={research}></ResearchCard>)
                        }
                   </div>
                  
            </div>
      );
};

export default ResearchPaper;