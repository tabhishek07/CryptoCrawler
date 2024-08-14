import React from "react";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" sticky bottom-0 w-full pt-2 pb-2 bg-custom-blue flex  shadow- justify-between items-center px-4 ">
      <div>
        <Link to={"/"}>
          {" "}
          <h1 className="text-[20px] font-black text-white">
            Crypto<span className="text-orange-400">Crawler</span>
          </h1>
        </Link>
      </div>
      <div className="flex gap-8 text-[22px]">
        <FaYoutube className="text-red-600 " />
        <CiLinkedin className="text-blue-600" />
        <VscGithub className="text-white"/>
        <FaWhatsapp className="text-green-400" />

        <FaXTwitter className="text-white"/>
      </div>
    </div>
  );
};

export default Footer;
