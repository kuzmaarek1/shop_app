import React from "react";
import { HeroBanner } from "/components";
import { client } from "/lib/client.js";

const Home = ({ productData, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="text-center m-[40px_0px] text-[#324d67]">
        <h2 className="text-[40px] font-extrabold"> Best Seller Products</h2>
        <p className="text-base font-extralight">
          speaker There are many variations passages
        </p>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const productData = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      productData,
      bannerData,
    },
  };
};

export default Home;
