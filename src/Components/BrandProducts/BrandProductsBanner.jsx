import { useEffect, useState } from "react";

function BrandProductsBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

  const slideTo = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < 4 ? prevSlide + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 4));
  };

  const imageUrls = [
    'https://i.ibb.co/hWk7g0f/samsung-galaxy-s20.jpg',
    'https://i.ibb.co/h2M325G/iphone-13-pro-max.jpg',
    'https://i.ibb.co/FV4dK9Z/i-Phone-14-Pro-removebg-preview.png',
    'https://i.ibb.co/dgpvQJn/Sony-Alpha-A7-11.jpg',
    'https://i.ibb.co/b69T4fJ/Google-Pixel-5-Sorta-Sage.jpg'
    
  ];
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); 
    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  return (
    <div id="default-carousel" className="relative w-full h-56 md:h-full  drop-shadow-2xl "
     data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-full">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? '' : 'hidden'
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={url}
              className="absolute block w-9/12 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full "
              alt={`Slide ${index + 1}`}
            />
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
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-red-300/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-red-300/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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
        </span>
      </button>
    </div>
  );
}
  export default BrandProductsBanner;
  