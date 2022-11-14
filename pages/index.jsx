import React from "react";
import { HeroBanner } from "/components";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="text-center m-[40px_0px] text-[#324d67]">
        <h2 className="text-[40px] font-extrabold"> Best Seller Products</h2>
        <p className="text-base font-extralight">
          speaker There are many variations passages
        </p>
      </div>
    </div>
  );
};

export default Home;
