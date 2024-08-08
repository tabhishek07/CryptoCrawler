import React from "react";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return(
        <div className=" sticky bottom-0 w-full pt-2 pb-2 bg-gradient-to-r from-neutral-900 via-gray-800 to-rose-900 flex border border-black shadow- justify-between items-center px-4 ">
            <div > 
            <h1 className='text-[20px] font-black text-white'>Crypto<span className="text-orange-400">Crawler</span></h1>
            </div>
            <div className="flex gap-8 text-[22px]">
            <FaYoutube className="text-red-700"/>
            <CiLinkedin className="text-blue-700" />
            <VscGithub />   
            <FaWhatsapp className="text-green-400"/>
           
            <FaXTwitter />  
            </div>
        </div>


    );
}

export default Footer;