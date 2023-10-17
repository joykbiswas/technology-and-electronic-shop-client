const HomeBanner = () => {
    return (
      <div className=" my-6">
        
        <div
          className="hero min-h-screen" data-aos="zoom-in" data-aos-duration="1000"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/M9rTm4Q/phone.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>
          <div  className="hero-content  text-neutral-content" data-aos="fade-left" data-aos-duration="4000">
            <div   className="">
              <h1 className="mb-4 text-7xl font-extrabold ">Learn & Discover</h1>
              <hr className="w-14 border-2" />
              <p className="mb-5 mt-2 text-2xl " data-aos="fade-right" data-aos-duration="3000">
                Ready to learn and have fun ? Find a perfect <br /> course and join us today.
              </p>
              <div className="space-x-5" data-aos="fade-up" data-aos-duration="3000">
              <button className=" border p-3 text-lg font-bold hover:bg-white hover:text-black">Read More</button>
              <button className="p-3 text-lg bg-red-500 font-bold hover:bg-red-600">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeBanner;