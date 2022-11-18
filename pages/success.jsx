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
    <div className="flex justify-center items-center w-full h-full">
      <div className="sm:w-[80%] w-[95%] bg-[#dcdcdc] p-[50px] rounded-2xl flex flex-col justify-center items-center">
        <p className="text-[40px] text-[green]">
          <BsBagCheckFill />
        </p>
        <div className="text-[#324d67] text-center font-black sm:text-[40px] text-[15px] mt-5 capitalize">
          Tkank you for your order!
        </div>
        <p className="sm:text-[16px] text-[13px] font-semibold text-center mt-5">
          Check your email inbox for the receipt
        </p>
        <p className="sm:text-[16px] text-[13px] font-semibold text-center mt-5">
          If you have any questions, please email
        </p>
        <Link
          href="mailto:order@example.com"
          className="sm:text-[16px] text-[15px] text-center text-[#f02d34] mb-2"
        >
          order@example.com
        </Link>
        <Link href="/">
          <button
            type="button"
            className="w-[100%] max-w-[400px] p-[10px_12px] rounded-2xl border-none sm:text-[20px] text-[15px]  mt-2.5 uppercase bg-[#f02d34] text-[#fff] cursor-pointer scale-100 transition-transform hover:scale-110"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
