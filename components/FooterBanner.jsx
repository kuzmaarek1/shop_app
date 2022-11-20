import React from "react";
import Link from "next/link";
import { urlFor } from "/lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="mx-[2.5%] my-[2.5%] w-[95%] leading-[1] text-[white] bg-[#f02d34] rounded-[15px]">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-rows-1 md:grid-rows-[1fr_0.2fr] grid-rows-[0.5fr_0.5fr_auto] h-full">
        <div className="flex flex-col justify-center items-center md:items-start">
          <p className="m-[18px]">{discount}</p>
          <h3 className="md:ml-[25px] md:text-[80px] text-[40px] font-black">
            {largeText1}
          </h3>
          <h3 className="md:ml-[25px] md:text-[80px] text-[40px] f font-black">
            {largeText2}
          </h3>
          <p className="m-[18px]">{saleTime}</p>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <img
            className="md:h-[400px] md:w-[400px] h[300px] w-[300px]"
            src={urlFor(image)}
            alt="image_footer"
          />
        </div>
        <div className="leading-[1.4] flex flex-col justify-center items-center xl:items-start md:col-span-2 col-span-1 xl:col-span-1 row-span-1">
          <p className="p-[12px] text-lg">{smallText}</p>
          <h3 className="md:text-6xl text-[40px] font-extrabold">{midText}</h3>
          <p className="p-[12px] text-lg">{desc}</p>
          <Link href={`/product/${product}`}>
            <button
              type="button"
              className="p-[8px_16px] bg-white text-[red] border-none m-4 text-[18px] font-medium cursor-pointer rounded-2xl scale-100 transition-transform hover:scale-110"
            >
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
