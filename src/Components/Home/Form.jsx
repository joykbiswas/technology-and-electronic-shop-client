const Form = () => {
  return (
    <div className="flex bg-slate-200 p-20">
      <div className="w-1/2">
        <h2 className="text-4xl text-teal-400">Newsletter & Get Updates</h2>
        <h4 className="text-xl">
          Sign up for our newsletter to get up-to-date from us
        </h4>
      </div>
      <div className="w-1/2">
        <div className="form-control ">
         
          <label className="input-group">
            <input
              type="text"
              placeholder="Enter Your Email Here"
              className="input input-bordered w-full"
            />
           <button className="bg-blue-500 text-white hover:bg-teal-400 p-3"> SUBMIT</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Form;
