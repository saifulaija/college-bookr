import React, { useState } from 'react';

import img1 from '../../../public/graduate1.jpg';
import img2 from '../../../public/graduate2.jpg';
import img3 from '../../../public/graduate3.jpg';
import img4 from '../../../public/graduate4.jpg';
import img5 from '../../../public/graduate5.jpg';
import img6 from '../../../public/graduate6.jpg';

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openLightbox = (image) => {
    setSelectedImage(image);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setSelectedImage('');
    setShowLightbox(false);
  };

  return (
   <div className='w-full my-10'>
      <h1 className='text-xl md:text-3xl lg:text-4xl text-center text-yellow-500 font-bold uppercase my-10'>Gallery</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:container mx-auto">
      
      {images.map((image, index) => (
        <div key={index} className="cursor-pointer" onClick={() => openLightbox(image)}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
        </div>
      ))}
      {showLightbox && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
          onClick={closeLightbox}
        >
          <img src={selectedImage} alt="Selected Image" className="max-h-screen max-w-full p-4" />
        </div>
      )}
    </div>
   </div>
  );
};

export default Gallery;
