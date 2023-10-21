
const AboutUs = () => {
    return (
        <div>
            
            <div className=" md:grid md:grid-cols-12 grid">
            {/* our history */}
            <div className="md:col-span-7 sm:col-span-12 m-3">
            <h2 className="text-2xl">OUR HISTORY</h2>
            <h1 className="text-5xl">Journey Our <span className="text-red-400">Mobile Plaza</span> </h1>
            <hr  className="border-4 w-20 border-blue-400 mt-5 mb-8"/>
            <p className="text-xl ">Mobile Plaza, established in 2014, emerged from a shared fascination with cutting-edge technology and a vision to bring the world is finest mobile devices to our community. Over the years, we have grown from a small local shop to a renowned destination for top brands like Apple, Samsung, Sony, Google, and Intel. </p>
            <div className="flex justify-around my-4">
                <div className="w-40  ">
                  <h2 className="text-center text-4xl text-blue-500 font-semibold">12</h2>
                  <p className="text-center text-xl">Years Experience</p>
                </div>
                <div className="w-40 ">
                  <h2 className="text-center text-4xl text-blue-500 font-semibold">20K</h2>
                  <p className="text-center text-xl">Happy Customers</p>
                </div>
                <div className="w-44 ">
                  <h2 className="text-center text-4xl text-blue-500 font-semibold">100%</h2>
                  <p className="text-center text-xl">Clients Satisfaction</p>
                </div>
            </div>
            </div>
            <div className="md:col-span-5 sm:col-span-12 m-3"     
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            >
                <img className="mb-3 w-full " src="https://i.ibb.co/CmrM4vt/about-us-img-11-1.png" alt="" />
            </div>
        </div>
        {/* meet our team */}
        <div>
            <h2 className="text-5xl mt-12">Meet Our Dedicated Team</h2>
            <hr  className="border-4 w-20 border-blue-400 mt-4"/>
            <div className="grid grid-cols-2 md:grid-cols-4   gap-y-7 my-10">
                <div className=" m-2" >
                <img className="w-48 h-56 mx-auto " src="https://i.ibb.co/DK1FwJx/author8.jpg" alt="" />
                <h1 className="text-center mt-3 font-bold text-blue-500">FOUNDER</h1>
                <p className="text-center text-lg">Larry Page</p>
                </div>
                <div className="m-2">
                 <img className="w-48 h-56 mx-auto" src="https://i.ibb.co/1TswrNh/author7.jpg" alt="" />
                 <h1 className="text-center mt-3 font-bold text-blue-500">CEO</h1>
                <p className="text-center text-lg">N. R. Narayana Murthy</p>
                </div>
                <div className="m-2">
                 <img className="w-48 h-56 mx-auto" src="https://i.ibb.co/zPj5RYZ/team-71-1.png" alt="" />
                 <h1 className="text-center mt-3 font-bold text-blue-500">ADVISOR</h1>
                 <p className="text-center text-lg">S Gopalakrishnan</p>
                </div>
                <div className="m-2">
                 <img className="w-48 h-56 mx-auto" src="https://i.ibb.co/mJppMW4/author5.jpg" alt="" />
                  <h1 className="text-center mt-3 font-bold text-blue-500">DESIGNER</h1>
                  <p className="text-center text-lg">Klaus Tschira</p>
                </div>
                <div className="m-2">
                <img className="w-48 h-56 mx-auto" src="https://i.ibb.co/4JYdKmf/author3.jpg" alt="" />
                  <h1 className="text-center mt-3 font-bold text-blue-500">FOUNDER</h1>
                  <p className="text-center text-lg">Lee Byung-chul</p>
                </div>
                <div className="m-2">
                 <img className="w-48 h-56 mx-auto" src="https://i.ibb.co/Fm5pLJN/Untitled-6.jpg" alt="" />
                 <h1 className="text-center mt-3 font-bold text-blue-500">ADVISOR</h1>
                 <p className="text-center text-lg">Michael Dell</p>
                </div>
                <div className="m-2">
                 <img className="w-48 h-56 mx-auto" src="https://i.ibb.co/ftmM8wF/team-21-1.png" alt="" />
                 <h1 className="text-center mt-3 font-bold text-blue-500">FOUNDER</h1>
                 <p className="text-center text-lg">Marc Tarpenning</p>
                </div>
                <div className="m-3">
                 <img className="w-48 h-56 mx-auto" src="https://i.ibb.co/7RJJdJS/author9.jpg" alt="" />
                 <h1 className="text-center mt-2 font-bold text-blue-500">ADVISOR</h1>
                 <p className="text-center text-lg">Chris Hughes</p>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default AboutUs;