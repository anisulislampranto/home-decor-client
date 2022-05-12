import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const QuickLookModal = ({ setShowModal, userData }) => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(0);

  console.log(cart);

  return (
    <div>
      <div className="justify-center items-end sm:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none overflow-hidden">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-hidden">
            {/*body*/}
            <div className="relative p-6 pl-0 py-0 flex flex-col sm:flex sm:flex-row gap-1">
              <div className="overflow-hidden sm:w-1/2">
                <div className="flex justify-center">
                  <img
                    className="sm:h-full h-52"
                    src={`data:image/png;base64,${userData.image}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="sm:py-5 sm:w-1/2 sm:my-auto px-4">
                <h1 className="text-5xl font-bold">{userData.name}</h1>
                <h1 className="text-4xl mt-3">${userData.price * quantity}</h1>
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  I always felt like I could do anything. That’s the main thing
                  people are controlled by!
                </p>
                <div className="flex gap-2">
                  <div className="flex gap-2 border-2 border-black shadow-md p-2 rounded">
                    <p>Quantity</p>
                    <div className="flex gap-2">
                      <span>
                        <FontAwesomeIcon
                          className="cursor-pointer"
                          onClick={() => setQuantity(quantity - 1)}
                          icon={faCaretLeft}
                        />
                      </span>
                      {quantity}
                      <span>
                        <FontAwesomeIcon
                          className="cursor-pointer"
                          onClick={() => setQuantity(quantity + 1)}
                          icon={faCaretRight}
                        />
                      </span>
                    </div>
                  </div>
                  <button
                    className="p-2 border-2 border-black shadow-md rounded bg-black text-white font-bold px-4 hover:bg-white hover:text-black"
                    onClick={() => setCart(userData.price * quantity)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <span
                className=" cursor-pointer hover:shadow-md hover:rounded-md p-2 h-7 hover:bg-red-600 hover:text-white"
                onClick={() => setShowModal(false)}
              >
                X
              </span>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default QuickLookModal;
