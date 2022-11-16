import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "/context/StateContext";
import { urlFor } from "/lib/client";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();
  return (
    <div
      className="w-[100vw] bg-[rgba(0,0,0,0.5)] fixed right-0 top-0 z-[100] transition-all ease-in-out duration-1000"
      ref={cartRef}
    >
      <div className="h-[100vh] w-[415px] bg-white relative p-[40px_10px] mr-0 ml-auto">
        <button
          type="button"
          onClick={() => setShowCart(false)}
          className="flex items-center text-[18px] font-medium cursor-pointer gap-0.5 ml-2.5 mt-[10px] border-none bg-transparent "
        >
          <AiOutlineLeft />
          <span className="ml-2.5">Your Cart</span>
          <span className="ml-2.5 text-[#f02d34]">
            ({totalQuantities} items)
          </span>
        </button>
        {cartItems?.length < 1 && (
          <div className="m-10 text-center flex flex-col items-center">
            <AiOutlineShopping size={150} />
            <h3 className="text-[20px] font-semibold">
              Your shopping bag is empty
            </h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="w-full max-w-[400px] p-[10px_12px] rounded-2xl border-none text-[20px] mt-2.5 uppercase bg-[#f02d34] text-[#fff] cursor-pointer scale-100 transition-transform hover:scale-110"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className="mt-4 overflow-auto max-h-[70vh]">
          {cartItems?.length >= 1 &&
            cartItems.map((item) => (
              <div className="flex w-[100%] gap-[30px] p-5" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="w-[30%] h-[30%] rounded-2xl bg-[#ebebeb]"
                />
                <div>
                  <div className="flex w-[120%] text-[#324d67] mb-[30px]">
                    <h5 className="absolute font-bold text-[16px]">
                      {item.name}
                    </h5>
                    <h4 className="absolute right-6 font-bold text-[12px]">
                      ${item.price}
                    </h4>
                  </div>
                  <div className="flex h-full w-[120%] text-[#324d67] mt-[10px]">
                    <div className="w-[100%] absolute">
                      <p className="flex w-[35%] h-8 relative">
                        <button
                          //onClick={}
                          className="absolute flex items-center justify-center top-0 left-0 h-full w-1/3 text-base cursor-pointer text-[#f02d34] border-solid border-[gray] border-[1px]"
                        >
                          <AiOutlineMinus />
                        </button>
                        <button className="absolute flex items-center justify-center h-full w-1/3 left-1/3 top-0 text-base cursor-pointer border-solid border-[gray] border-y-[1px]">
                          {item.quantity}
                        </button>
                        <button
                          //onClick={}
                          className="absolute flex items-center justify-center h-full w-1/3 left-2/3 text-base  cursor-pointer text-[rgb(49,168,49)] border-solid border-[gray] border-[1px]"
                        >
                          <AiOutlinePlus />
                        </button>
                      </p>
                    </div>
                    <div className="h-8 flex justify-center absolute right-6">
                      <button
                        type="button"
                        className="text-[24px] text-[#f02d34] cursor-pointer bg-transparent border-none"
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="absolute bottom-[12px] right-[5px] w-full p-[30px_65px]">
            <div className="flex justify-between">
              <h3 className="font-bold text-[22px]">Subtotal</h3>
              <h3 className="font-bold text-[22px]">${totalPrice}</h3>
            </div>
            <div className="w-[300px] m-auto">
              <button
                type="button"
                className="w-full max-w-[400px] p-[10px_12px] rounded-2xl border-none text-[20px] mt-2.5 uppercase bg-[#f02d34] text-[#fff] cursor-pointer scale-100 transition-transform hover:scale-110"
              >
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
