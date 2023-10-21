

const ContactInfo = () => {
  return (
    <div className=" mt-12 space-y-3">
      <h2 className='text-5xl font-bold'>Customer Support & Contact Information</h2>
      <p className='text-3xl'>If you have any questions or need assistance, please feel free to reach out:</p>
     
     <div className='flex border bg-gray-300'>
     <div>
        <img className='w-44'
         src="https://i.ibb.co/ky6H0p2/callcenter-face.png" alt="" />
      </div>
      <div className='flex flex-col items-start ps-20 justify-center'>
      <ul>
        <li className='text-2xl'>Email: support@yourshop.com</li>
        <li className='text-2xl'>Phone: +1-123-456-7890</li>
        <li className='text-2xl'>Address: 123 Mobile Plaza, City, State, ZIP</li>
      </ul>
      </div>
     </div>
    </div>
  );
};

export default ContactInfo;
