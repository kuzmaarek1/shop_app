import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "/components";
import { client, urlFor } from "/lib/client";

const ProductDetails = ({
  product: { image, name, details, price },
  products,
}) => {
  return (
    <div>
      <div className="flex gap-10 m-10 mt-[60px] ml-0 color-[#324d67] flex-wrap">
        <div>
          <div>
            <img
              src={urlFor(image[0])}
              alt=""
              className="rounded-2xl bg-[#ebebeb] w-[400px] h-[400px] cursor-pointer duration-300 ease-in-out hover:bg-[#f02d34]"
            />
          </div>
          <div className="flex gap-2.5 m-5">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                alt={`image${i}`}
                className="rounded-lg bg-[#ebebeb] w-[70px] h-[70px] cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="w-[60%]">
          <h1 className="text-[2em] font-bold m-0">{name}</h1>
          <div className="text-[#f02d34] mt-2.5 flex gap-[5px] items-center">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-[#324d67] mt-0">(55)</p>
          </div>
          <h4 className="mt-2.5 mb-[1.33em] ml-0 mr-0 font-bold">Details:</h4>
          <p className="mt-2.5">{details}</p>
          <p className="mt-[30px] font-bold text-[26px] text-[#f02d34] ">
            ${price}
          </p>
          <div className="flex gap-5 mt-2.5 items-center">
            <h3 className="text-[1.17em] font-bold mt-[1em] mb-[1em] ml-0 mr-0">
              Quantity:
            </h3>
            <p className="flex w-[25%] h-8  relative">
              <span
                onClick={() => console.log("mnus")}
                className="absolute flex items-center justify-center top-0 left-0 h-full w-1/3 text-base cursor-pointer text-[#f02d34] border-solid border-[gray] border-[1px]"
              >
                <AiOutlineMinus />
              </span>
              <span
                onClick={() => console.log("1")}
                className="absolute flex items-center justify-center h-full w-1/3 left-1/3 top-0 text-base cursor-pointer border-solid border-[gray] border-y-[1px]"
              >
                1
              </span>
              <span
                onClick={() => console.log("plus")}
                className="absolute flex items-center justify-center h-full w-1/3 left-2/3 text-base  cursor-pointer text-[rgb(49,168,49)] border-solid border-[gray] border-[1px]"
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="flex gap-[30px]">
            <button
              type="button"
              className="p-[10px_20px] border-[1px] border-solid border-[#f02d34] mt-10 text-lg font-medium bg-[white] text-[#f02d34] cursor-pointer w-[200px] scale-100 transition-transform hover:scale-110"
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="w-[200px] p-[10px_20px] bg-[#f02d34] text-[white] border-none mt-[40px] text-[18px] font-medium cursor-pointer scale-100 transition-transform hover:scale-110"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[60px]">
        <h2 className="text-center m-[50px] text-[#324d67] text-[28px] font-bold">
          You may also like
        </h2>
        <div className="relative h-[330px] w-full overflow-x-hidden">
          <div className="flex justify-center gap-[15px] absolute mt-[15px] w-[400%] sm:w-[180%] track">
            {products?.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type=="product"]{
    slug{
        current
    }
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const productQuery = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const product = await client.fetch(productQuery);

  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
