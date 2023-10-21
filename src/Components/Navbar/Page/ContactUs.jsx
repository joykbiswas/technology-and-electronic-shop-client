import ContactInfo from "./ContactInfo";


const ContactUs = () => {
    return (
        <div>
            <div
        className="hero min-h-screen mt-16" data-aos="fade-right"
        data-aos-offset="300"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/5cwyx2t/woman-taking-notes-during-team-meeting.jpg)",
        }}
      >
        <div className=" bg-opacity-60"></div>

        <div className="w-2/5 m-5 bg-slate-50 p-6"   >
          <div className="mb-4 flex-row md:flex">
            <h2 className="text-5xl font-bold ">Get in touch</h2> 
            {/* <img className="w-36 " src="https://i.ibb.co/hDHMhxD/free.jpg" alt="" /> */}
          </div>
        <div className="form-control  space-y-4 " >
                      <input
                        type="text"
                        placeholder="Name"
                        className=" border-b-2 border-black p-3"
                        required
                      />
                      <input
                        type="text"
                        placeholder=" Subject"
                        className=" border-b-2 border-black p-3"
                        required
                      />
                      <input
                        type="text"
                        placeholder=" Number"
                        className=" border-b-2 border-black p-3"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Email Address"
                        className=" border-b-2 border-black p-3"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Select product"
                        className=" border-b-2 border-black p-3"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Message"
                        className=" border-b-2 border-black p-6"
                        required
                      />
                 
            </div>
            <button className="p-3 m-5 font-bold bg-black  text-white text-xl hover:bg-slate-800">Get it now</button>
        </div>




      </div>
     
      <ContactInfo></ContactInfo>
        </div>
    );
};

export default ContactUs;