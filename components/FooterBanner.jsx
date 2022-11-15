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
    <div className="p-[100px_40px] bg-[#f02d34] rounded-[15px] relative w-full h-[400px] leading-[1] text-[white] mt-[120px]">
      <div className="flex justify-between">
        <div>
          <p className="m-[18px]">{discount}</p>
          <h3 className="ml-[25px] text-[80px] font-black">{largeText1}</h3>
          <h3 className="ml-[25px] text-[80px] font-black">{largeText2}</h3>
          <p className="m-[18px]">{saleTime}</p>
        </div>
        <div className="leading-[1.4]">
          <p className="p-[12px] text-lg">{smallText}</p>
          <h3 className="text-6xl font-extrabold">{midText}</h3>
          <p className="p-[12px] text-lg">{desc}</p>
          <Link href={`/product/${product}`}>
            <button
              type="button"
              className="p-[8px_16px] bg-white text-[red] border-none mt-4 text-[18px] font-medium cursor-pointer rounded-2xl"
            >
              {buttonText}
            </button>
          </Link>
        </div>
        <img
          className="absolute left-0 right-0 top-0 bottom-0 m-auto"
          src={urlFor(image)}
          alt="image_footer"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
