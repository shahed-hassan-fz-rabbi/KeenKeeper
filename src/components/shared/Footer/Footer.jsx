import React from 'react';
import Instagram from '../../../assets/instagram.png';
import Facebook from '../../../assets/facebook.png';
import Twitter from '../../../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white px-6 py-10 mt-10">
      
      {/* Top Section */}
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h1 className="text-3xl font-bold">KeenKeeper</h1>
        <p className="text-sm opacity-80">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        
        <div className="flex justify-center gap-4 mt-4">
          <button  className="btn btn-circle btn-sm bg-white text-black">
            <img src={Instagram} alt="Instagram" />
          </button>
          <button className="btn btn-circle btn-sm bg-white text-black">
            <img src={Facebook} alt="Facebook" />
          </button>
          <button className="btn btn-circle btn-sm bg-white text-black">
            <img src={Twitter} alt="Twitter" />
          </button>
        </div>
      </div>

      
      <div className="divider border-[#848484]"></div>

     
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        
        <p>&copy; 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;