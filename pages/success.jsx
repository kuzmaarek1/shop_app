import React, { useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireworks } from "/lib/utils";
import { useStateContext } from "/context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-[72.5vh]">
      <div className="w-full bg-[#dcdcdc] p-[50px] rounded-2xl flex flex-col justify-center items-center">
        <p className="text-[40px] text-[green]">
          <BsBagCheckFill />
        </p>
        <h2 className="text-[#324d67] font-black text-[40px] mt-0 capitalize">
          Tkank you for your order!
        </h2>
        <p className="text-[16px] font-semibold text-center">
          Check your email inbox for the receipt
        </p>
        <p className="text-[16px] font-semibold text-center m-2.5 mt-[30px]">
          If you have any questions, please email
          <Link
            href="mailto:order@example.com"
            className="ml-[5px] text-[#f02d34]"
          >
            order@example.com
          </Link>
        </p>
        <Link href="/">
          <button
            type="button"
            className="w-[300px] max-w-[400px] p-[10px_12px] rounded-2xl border-none text-[20px] mt-2.5 uppercase bg-[#f02d34] text-[#fff] cursor-pointer scale-100 transition-transform hover:scale-110"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
