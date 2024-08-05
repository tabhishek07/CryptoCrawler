import React from "react";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="bottom-0 absolute w-full my-1 rounded-lg flex border shadow-lg justify-between items-center px-4 ">
            <div> 
            <h1 className='text-[20px] font-black'>Crypto<span className="text-blue-800">Crawler</span></h1>
            </div>
            <div className="flex gap-8 text-[22px]">
            <VscGithub />
            <CiLinkedin className="text-blue-700" />
            <FaWhatsapp className="text-green-400"/>
            <FaYoutube className="text-red-700"/>
            <FaXTwitter />  
            </div>
        </div>


    );
}

export default Footer;