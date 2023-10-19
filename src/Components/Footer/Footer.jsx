import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="my-12">
    
    <footer className="bg-base-200 p-10">
      <div className="footer   text-base-content">
        <aside>
          <img className="w-20"
           src="https://i.ibb.co/TPm2tyJ/mobile-plaza.jpg" alt="logo" />
          <p className="text-xl">
            <span className='font-bold'>MOBILE PLAZA</span> Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title text-2xl">Services</header>
          <a className="link link-hover text-xl">Branding</a>
          <a className="link link-hover text-xl">Design</a>
          <a className="link link-hover text-xl">Marketing</a>
          <a className="link link-hover text-xl">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title text-2xl">Company</header>
          <a className="link link-hover text-xl">About us</a>
          <a className="link link-hover text-xl">Contact</a>
          <a className="link link-hover text-xl">Jobs</a>
          <a className="link link-hover text-xl">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title text-2xl">Legal</header>
          <a className="link link-hover text-xl">Terms of use</a>
          <a className="link link-hover text-xl">Privacy policy</a>
          <a className="link link-hover text-xl">Cookie policy</a>
        </nav>
      </div>
      <div >
        <hr className="border border-black my-5" />
       <div className="md:flex justify-between space-y-2">
          <div>
             <h2 className="text-xl">© 2023 joy biswas portfolio. All Rights Reserved.</h2>
            </div>
           <div className='flex gap-7'>
             <BsFacebook></BsFacebook>
             <BsInstagram></BsInstagram>
             <BsTwitter></BsTwitter>
             <BsGithub></BsGithub>
              
            </div>
       </div>

      </div>
    </footer>
    
    
    </div>
  );
};

export default Footer;
