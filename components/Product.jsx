import React from "react";
import Link from "next/link";
import { urlFor } from "/lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="cursor-pointer scale-100 transition-transform text-[#324d67] hover:scale-110">
          <img
            src={urlFor(image && image[0])}
            className="w-[250px] h-[250px] rounded-2xl transition-transform bg-[#ebebeb] scale-100"
          />
          <p className="font-medium">{name}</p>
          <p className=" font-extrabold mt-1.5 text-black">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
