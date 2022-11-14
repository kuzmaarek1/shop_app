import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-[#324d67] text-center mt-5 p-[30px_10px] font-bold flex flex-col justify-center items-center gap-2.5 text-[20px]">
      <p>2022 JSM Headphones All rights reserverd</p>
      <p className="gap-2.5 flex text-[25px]">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
