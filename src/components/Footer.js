import React from "react";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp, FaTwitter as FaXTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-custom-blue flex flex-col sm:flex-row justify-between items-center px-4 py-2 shadow-md w-full max-w-full overflow-hidden">
      <div className="text-center sm:text-left mb-4 sm:mb-0">
        <Link to="/">
          <h1 className="text-[16px] sm:text-[20px] font-black text-white">
            Crypto<span className="text-orange-400">Crawler</span>
          </h1>
        </Link>
      </div>
      <div className="flex gap-4 sm:gap-8 text-[18px] sm:text-[22px]">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-red-600 hover:text-red-500 transition-colors" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <CiLinkedin className="text-blue-600 hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <VscGithub className="text-white hover:text-gray-300 transition-colors" />
        </a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-400 hover:text-green-300 transition-colors" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-white hover:text-gray-300 transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
