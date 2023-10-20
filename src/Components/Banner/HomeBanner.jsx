

// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

function HomeBanner() {
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
      imageUrl: 'https://i.ibb.co/sw0djSL/iphone-12.jpg',
      header:'Get 35% Off',
      text: 'SHOP WISH WITH PRICE COMPARISONS',
      buttonLabel: 'VIEW COLLECTION',
    },
    {
      imageUrl: 'https://i.ibb.co/frd3Hyq/galaxy-s23-300x187.jpg',
      header:"Get 40% Off",
      text: 'Exclusive Deal for You!',
      buttonLabel: 'VIEW COLLECTION',
    },
    {
      imageUrl: 'https://i.ibb.co/DMGzShv/laptop.jpg',
      header:'Get 40% Off',
      text: 'Special Offer Grab Your Product Discount Today!',
      buttonLabel: 'VIEW COLLECTION',
    },
    {
      imageUrl: 'https://i.ibb.co/Lgs1qsp/tablet.jpg',
      header:'Get 30% Off',
      text: 'Do not Miss Out!',
      buttonLabel: 'VIEW COLLECTION',
    },
    {
      imageUrl: 'https://i.ibb.co/NYbVnKK/banner-phone.jpg',
      header:'Get 50% Off',
      text: 'Limited-Time Offer',
      buttonLabel: 'VIEW COLLECTION',
    },
  ];
  

 

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 6000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="h-[80vh] my-9 relative">
      <div
        id="default-carousel"
        className="relative w-full h-56 md:h-full drop-shadow-2xl"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-full bg-green-600">
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
                  <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4 text-rose-400">
                    
                    {item.header}
                  </h1>
                  <p className="opacity-80 mb-12 text-3xl font-semibold">
                    {item.text}
                    {/* {texts[currentTextIndex]} */}
                  </p>
                  <div className="flex gap-2">
                    <button className="text-white bg-transparent border border-white py-4 px-4 rounded-lg font-semibold hover:bg-white hover:text-black">
                      {item.buttonLabel}
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
    </div>
  );
}

export default HomeBanner;





// const HomeBanner = () => {
//     return (
//       <div className=" my-6">
        
//         <div
//           className="hero min-h-screen" data-aos="zoom-in" data-aos-duration="1000"
//           style={{
//             backgroundImage:
//               "url(https://i.ibb.co/M9rTm4Q/phone.jpg)",
//           }}
//         >
//           <div className="hero-overlay bg-opacity-40"></div>
//           <div  className="hero-content  text-neutral-content" data-aos="fade-left" data-aos-duration="4000">
//             <div   className="">
//               <h1 className="mb-4 text-7xl font-extrabold ">Get <span className="text-red-400">50% Off</span></h1>
//               <hr className="w-14 border-2" />
//               <p className="mb-5 mt-2 text-2xl " data-aos="fade-right" data-aos-duration="3000">
//                 SHOP WISE WITH PRICE COMPARISONS 
//               </p>
//               <div className="space-x-5" data-aos="fade-up" data-aos-duration="3000">
//               <button className=" border p-3 text-lg font-bold hover:bg-white hover:text-black">VIEW COLLECTION</button>
//               <button className="p-3 text-lg bg-red-500 font-bold hover:bg-red-600">CATEGORIES</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default HomeBanner;