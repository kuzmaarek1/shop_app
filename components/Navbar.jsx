import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "/context/StateContext";
import { Cart } from "/components";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  console.log(showCart);
  return (
    <div className="flex justify-between m-[6px_18px] realtive">
      <p className="text-gray-600 text-lg">
        <Link href="/">JSM Headphones</Link>
      </p>
      <button
        type="button"
        onClick={() => setShowCart(true)}
        className="text-gray-600 text-2xl cursor-pointer relative border-none outline-0 bg-transparent transition-transform	hover:scale-110"
      >
        <AiOutlineShopping />
        <span className="absolute right-[-8px] top-0 text-xs text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold">
          {totalQuantities}
        </span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
