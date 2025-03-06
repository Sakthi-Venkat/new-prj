import React from 'react';
import { FaLinkedin, FaDiscord } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center gap-5 space-x-9">
        <div>
          <a href="#" className="mr-4 hover:text-gray-300">Features</a>
          <a href="#" className="mr-4 hover:text-gray-300">Pricing</a>
          <a href="#" className="mr-4 hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
        </div>
        <div className="flex items-center space-x-4 absolute right-6">
  <span>© 2025, Theo</span>
  
  {/* Updated X (Twitter) Icon */}
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300">
    <RiTwitterXLine className="h-6 w-6" />
  </a>

  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300">
    <FaLinkedin className="h-6 w-6" />
  </a>

  <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300">
    <FaDiscord className="h-6 w-6" />
  </a>
</div>

      </div>
    </footer>
  );
};

export default Footer;