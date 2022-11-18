import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { client, urlFor } from "/lib/client";
import { useStateContext } from "/context/StateContext";
import { Product } from "/components";

const ProductDetails = ({
  product: { image, name, details, price },
  product,
  products,
}) => {
  const [index, setIndex] = useState(0);
  const { incQty, decQty, qty, onAdd } = useStateContext();

  return (
    <div className="w-[100vw] h-[100%] grid grid-rows-[1fr_0.3fr]">
      <div className="w-[100vw] flex items-center">
        <div className="w-[100vw] grid lg:grid-cols-[0.5fr_1fr] md:grid-cols-[1fr_1fr] grid-cols-1 md:grid-rows-1 grid-rows-[0.5fr_auto] mt-10 ml-0 color-[#324d67]">
          <div className="flex flex-col items-center justify-center">
            <div>
              <img
                src={urlFor(image[index])}
                alt=""
                className="rounded-2xl bg-[#ebebeb] xl:w-[400px] lg:w-[300px] w-[290px] cursor-pointer duration-300 ease-in-out"
              />
            </div>
            <div className="flex flex-wrap gap-2.5 m-5">
              {image?.map((item, i) => (
                <img
                  key={i}
                  src={urlFor(item)}
                  alt={`image${i}`}
                  className={`rounded-lg w-[70px] h-[70px] cursor-pointer  hover:bg-[#f02d34] ${
                    i === index ? "bg-[#f02d34]" : "bg-[#ebebeb]"
                  }`}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-start md:items-start items-center xl:pr-20 md:pr-10 md:pl-0 pr-3 pl-3">
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
            <p className="mt-2.5 m-0">{details}</p>
            <p className="mt-[30px] font-bold text-[26px] text-[#f02d34] ">
              ${price}
            </p>
            <div className="flex gap-5 mt-2.5 items-center">
              <h3 className="text-[1.17em] font-bold mt-[1em] mb-[1em] ml-0 mr-0">
                Quantity:
              </h3>
              <p className="grid grid-cols-3 md:w-[10vw] sm:w-[20vw] w-[30vw]">
                <button
                  onClick={decQty}
                  className="flex items-center justify-center top-0 left-0 h-full text-base cursor-pointer text-[#f02d34] border-solid border-[gray] border-[1px]"
                >
                  <AiOutlineMinus />
                </button>
                <button className=" flex items-center justify-center h-full text-base cursor-pointer border-solid border-[gray] border-y-[1px]">
                  {qty}
                </button>
                <button
                  onClick={incQty}
                  className=" flex items-center justify-center h-full text-base cursor-pointer text-[rgb(49,168,49)] border-solid border-[gray] border-[1px]"
                >
                  <AiOutlinePlus />
                </button>
              </p>
            </div>
            <div className="flex gap-[30px]">
              <button
                type="button"
                onClick={() => onAdd(product, qty)}
                className="md:w-[200px] w-[40vw] p-[10px_20px] border-[1px] border-solid border-[#f02d34] mt-10 text-lg font-medium bg-[white] text-[#f02d34] cursor-pointer  scale-100 transition-transform hover:scale-110"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="md:w-[200px] w-[40vw] p-[10px_20px] bg-[#f02d34] text-[white] border-none mt-[40px] text-[18px] font-medium cursor-pointer scale-100 transition-transform hover:scale-110"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-[100vw] h-[100%]">
        <h2 className="text-center mt-[50px] text-[#324d67] text-[28px] font-bold">
          You may also like
        </h2>
        <div className="relative h-[330px] w-full overflow-x-hidden">
          <div className="flex justify-center gap-[15px] absolute w-[900%] small:w-[700%] mt-3 xl:w-[180%] lg:w-[250%] md:w-[300%] sm:w-[500%] track">
            {products?.map(
              (item, id) => id < 10 && <Product key={item._id} product={item} />
            )}
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
