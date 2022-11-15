import React from "react";
import Link from "next/link";
import { urlFor } from "/lib/client";

const HeroBanner = ({
  heroBanner: {
    smallText,
    midText,
    largeText1,
    buttonText,
    product,
    image,
    desc,
  },
}) => {
  return (
    <div className="p-[100px_40px] bg-[#dcdcdc] rounded-2xl relative h-[500px] w-full leading-[0.9] ">
      <p className="text-[20px]">{smallText}</p>
      <h3 className="mt-1 text-[4rem] font-bold">{midText}</h3>
      <h1 className="text-white text-[10em] ml-[-20px] uppercase font-bold">
        {largeText1}
      </h1>
      <img
        className="absolute top-[0%] right-[20%] w-[450px] h-[450px]"
        src={urlFor(image)}
        alt="headphones"
      />
      <div>
        <Link href={`/product/${product}`}>
          <button className=" rounded-2xl p-[10px_16px] bg-[#f02d34] text-white border-none mt-10 text-lg font-medium cursor-pointer z-[10000_!important]">
            {buttonText}
          </button>
        </Link>
        <div className="absolute right-[10%] bottom-[5%] w-[300px] leading-[1.3] flex flex-col text-[#324d67]">
          <h5 className="mb-3 font-bold text-base self-end text-[0.83rem]">
            Description
          </h5>
          <p className="text-[#5f5f5f] font-thin text-end">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
