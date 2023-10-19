
const Deals = () => {
    return (
        <div className="mb-24 ">
            <h2 className="text-5xl font-bold">HOT DEALS</h2>
            <hr  className="w-20 border-4 border-red-500 mt-4 mb-7 "/>
            <div className="flex flex-wrap gap-5 my-4 justify-center">
                <div className="flex bg-slate-50 w-[360px]">
                    <div className="p-2 ">
                      <h2 className="text-2xl text-blue-500"> Gadget <span className="text-red-400">25% Off</span></h2>  
                    <h3 className="text-3xl font-bold">Get Holiday Deals</h3>
                    <button className="p-4 bg-yellow-200 font-bold hover:text-white hover:bg-yellow-400">
                        VIEW COLLECTION</button>
                    </div>
                     <img className="w-36 p-2"
                      src="https://i.ibb.co/rGMTDRP/Apple-Air-Pods-3rd-e.jpg" alt="" />   
                </div>
                <div className="flex bg-slate-50 w-[360px]">
                    <div className="ms-1">
                     <h2 className="text-2xl text-blue-500"> Electronics, Minimal</h2>
                    <h3 className="text-3xl font-bold">Get Holiday Deals</h3>
                    <button className="p-4 bg-yellow-200 font-bold hover:text-white hover:bg-yellow-400">
                        VIEW COLLECTION</button>
                    </div>
                     <img className="w-36 p-2"
                      src="https://i.ibb.co/mCY8kFN/TV-LED-sony-KD-75-X89-K-4-K.jpg" alt="" />   
                </div>
                <div className="flex bg-slate-50 w-[360px]">
                    <div className="ms-2">
                     <h2 className="text-2xl text-blue-500">Get <span className="text-red-400 font-semibold">50% Off</span></h2>   
                    <h3 className="text-3xl font-bold ">Every Handset Item</h3>
                    <button className="p-4 bg-yellow-200 font-bold hover:text-white hover:bg-yellow-400">
                        VIEW COLLECTION</button>
                    </div>
                     <img className="w-36"
                      src="https://i.ibb.co/mtzyqmG/64832-BDB4-AD9718-Fold5-Black.png" alt="" />   
                </div>
            </div>
        </div>
    );
};

export default Deals;