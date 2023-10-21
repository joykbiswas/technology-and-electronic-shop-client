
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

// import { useEffect, useState } from "react";

import { useState } from "react";

function SpecialProduct() {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const slideTo = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < imageUrls.length - 1 ? prevSlide + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : imageUrls.length - 1));
  };

  const imageUrls = [
    {
      imageUrl: 'https://i.ibb.co/S35tPv5/drown-removebg-preview.png',
      header:'Gamepad, Gaming Accessories',
      text: 'Camera Drone',
      price:'$ 340.00',
      buttonLabel:'BUY NOW',
      buttonLabel_2: 'VIEW COLLECTION',
    },
    {
      imageUrl: 'https://i.ibb.co/G2rgtSD/VR-SHINECON-SC-G06-E-VR-Glasses-removebg-preview.png',
      header:"Mobile Accessories",
      text: 'Google Glass',
      price:'$ 140.00',
      buttonLabel:'BUY NOW',
      buttonLabel_2: 'VIEW COLLECTION',
    },
    {
      imageUrl: 'https://i.ibb.co/F4MBvj6/game-control-removebg-preview.png',
      header:'Computer Accessories',
      text: 'Game Controller',
      price:'$ 90.00',
      buttonLabel:'BUY NOW',
      buttonLabel_2: 'VIEW COLLECTION',
    },
    
  ];
  

  return (
    <div className="h-[80vh] my-9 relative">
      <div
        id="default-carousel"
        className="relative w-full h-56 md:h-full drop-shadow-2xl"
        data-carousel="slide"


      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-full bg-sky-600">
          {imageUrls.map((item, index) => (
            <div
              key={index}
              className={`${index === currentSlide ? '' : 'hidden'}`}
              data-carousel-item 
              
            >
              <img
                src={item.imageUrl}
                className="absolute top-0 right-0 w-3/5 h-full justify-center"
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-0 flex flex-col items-start ps-20 justify-center text-white bg-black/10">
                <div className="text-left "


                >
                  <h1 className="text-xl md:text-xl lg:text-xl font-bold mb-4 text-rose-400">
                    
                    {item.header}
                  </h1>
                  <p className="text-5xl opacity-80 mb-5  font-bold">
                    {item.text}                   
                  </p>
                  <p className="opacity-80 mb-5 text-3xl font-semibold">
                    {item.price}                   
                  </p>
                  <div className="flex gap-2">
                    <button className="text-white bg-transparent border border-white py-4 px-4 rounded-lg font-semibold hover:bg-white hover:text-black">
                      {item.buttonLabel}
                    </button>
                    <button className=" bg-transparent text-black  border-white bg-green-500 py-4 px-4 rounded-lg font-semibold hover:bg-green-600 ">
                      {item.buttonLabel_2}
                    </button>
                    {/* Add additional buttons or customize as needed */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {imageUrls.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full`}
              aria-current={index === currentSlide ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => slideTo(index)}
            ></button>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          <span className='text-2xl text-sky-200'><AiOutlineArrowLeft></AiOutlineArrowLeft></span>
          {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-red-300/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-red-400 dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span> */}
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          <span className='text-2xl text-sky-200'><AiOutlineArrowRight></AiOutlineArrowRight></span>
          {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-red-300/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-red-400 dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span> */}
        </button>
      </div>
    </div>
  );
}

export default SpecialProduct;



