import  { useEffect, useState } from 'react';
import SingleCollege from '../../components/SingleCollege/SingleCollege';

const PopularColleges = () => {

      const [colleges, setColleges] = useState([])

      useEffect(()=>{
            fetch('http://localhost:5000/colleges')
            .then(res=>res.json())
            .then(data=>setColleges(data))
      },[])
      return (
            <div className='w-full'>
                  <div className='mt-20 container mx-auto'>
                  <h1 className='text-xl md:text-3xl lg:text-4xl text-center text-[#33a688] font-bold uppercase'>Popular Colleges</h1>
                  <div className='grid md:grid-cols-3'>
                        {
                              colleges.slice(0,3).map(college=> <SingleCollege key={college._id} college={college}></SingleCollege>)
                        }
                  </div>
                  </div>
                  
            </div>
      );
};

export default PopularColleges;