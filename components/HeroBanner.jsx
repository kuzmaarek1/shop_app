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
    <div className="mx-[2.5%] bg-[#dcdcdc] rounded-2xl sm:h-[500px] h-auto  w-[95%] leading-[0.9] grid xl:grid-rows-5 xl:grid-cols-[1fr_0.5fr] sm:grid-rows-2 sm:grid-cols-2 grid-cols-1 grid-rows-[0.5fr_0.3fr_auto]">
      <div className="xl:row-span-5 sm:row-span-2 sm:items-start items-center flex flex-col justify-center p-8">
        <p className="text-[20px]">{smallText}</p>
        <h3 className="mt-1 sm:text-[4rem] text-[2rem] font-bold">{midText}</h3>
        <h1 className="text-white lg:text-[10em] sm:text-[7em] text-[4em] ml-[-20px] uppercase font-bold">
          {largeText1}
        </h1>
        <Link href={`/product/${product}`}>
          <button className=" rounded-2xl p-[10px_16px] bg-[#f02d34] text-white border-none sm:mt-10 mt-5 text-lg font-medium cursor-pointer z-[10000_!important] scale-100 transition-transform hover:scale-110">
            {buttonText}
          </button>
        </Link>
      </div>
      <div className="xl:row-span-3 sm:row-span-1 flex xl:justify-start justify-center xl:ml-[-22em] mt-[-1em] ml-0">
        <img
          className="xl:w-[450px] xl:h-[450px] lg:w-[300px] lg:h-[300px] w-[325px] h-[325px]"
          src={urlFor(image)}
          alt="headphones"
        />
      </div>
      <div className="xl:row-span-2 sm:row-span-1 xl:mt-0 mt-8 sm:pr-5 sm:pb-5 sm:pl-0 pb-2.5 pr-2.5 pl-2.5 leading-[1.3] flex flex-col xl:items-end items-center xl:justify-end justify-center text-[#324d67]">
        <h5 className="mb-3 font-bold text-base text-[0.83rem]">Description</h5>
        <p className="lg:text-[15px] text-[12px] text-[#5f5f5f] font-thin xl:text-end text-center">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
