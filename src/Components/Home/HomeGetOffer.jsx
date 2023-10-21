
const HomeGetOffer = () => {
  return (
    <div className="md:flex h-[5ovh]  mb-12">
      <div className="w-full md:w-1/2 shadow-2xl flex items-center justify-center"   
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-easing="ease-in-sine">
        <img className="h-80 "
         src="https://i.ibb.co/C9zL67S/giant-203556.jpg" alt="" />
      </div>
      <div  className="w-full md:w-1/2 flex flex-col space-y-3 items-start  justify-center bg-slate-100"
       data-aos="fade-left"
       data-aos-offset="200"
       data-aos-easing="ease-in-sine"
      >
        <h3 className="text-3xl font-semibold">Get 50% Off</h3>
        <h2 className="text-6xl font-bold">Every Handset Item</h2>
        <button className="p-4 bg-red-400 text-white font-bold hover:bg-red-500">Go Shop</button>
      </div>
    </div>
  );
};

export default HomeGetOffer;