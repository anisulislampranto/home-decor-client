import React, { useState } from "react";

const FilterProduct = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex place-content-evenly mt-5 ">
      <div class="hidden sm:flex sm:gap-4 my-auto">
        <a href="/" className=" hover:text-gray-500">
          All
        </a>
        <a href="/" className=" hover:text-gray-500">
          Home Decor
        </a>
        <a href="/" className=" hover:text-gray-500">
          Lighting
        </a>
        <a href="/" className=" hover:text-gray-500">
          Decoration
        </a>
        <a href="/" className=" hover:text-gray-500">
          Vases
        </a>
        <a href="/" className=" hover:text-gray-500">
          Basics
        </a>
      </div>
      <button
        className="flex my-auto sm:hidden md:hidden lg:hidden"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        type="button"
        onClick={() => setToggle(!toggle)}
      >
        Catagory
        <svg
          class="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {toggle && (
        <div
          class="absolute left-20 flex flex-col gap-3 mt-8 w-32 z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none p-3"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <a href="/" className=" hover:text-gray-500">
            All
          </a>
          <a href="/" className=" hover:text-gray-500">
            Home Decor
          </a>
          <a href="/" className=" hover:text-gray-500">
            Lighting
          </a>
          <a href="/" className=" hover:text-gray-500">
            Decoration
          </a>
          <a href="/" className=" hover:text-gray-500">
            Vases
          </a>
          <a href="/" className=" hover:text-gray-500">
            Basics
          </a>
        </div>
      )}
      <div class="relative inline-block text-left">
        <div>
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none p-2"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setOpen(!open)}
          >
            Filter
            {/* <!-- Heroicon name: solid/chevron-down --> */}
            <svg
              class="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        {open && (
          <div
            class="origin-top-right absolute right-0 mt-2 w-72 sm:w-96 rounded-md shadow-2xl z-10 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div
              class="py-5 px-5 flex gap-16 sm:20 bg-white relative z-10"
              role="none"
            >
              {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
              <div className="flex flex-col gap-3">
                <h1 className="font-bold text-xs sm:text-sm">SORT BY</h1>
                <a href="/" className="hover:bg-gray-50:">
                  Default
                </a>
                <a href="/" className="hover:bg-gray-50">
                  Popularity
                </a>
                <a href="/" className="hover:bg-gray-50">
                  Avarage Rating
                </a>
                <a href="/" className="hover:bg-gray-50">
                  Newness
                </a>
                <a href="/" className="hover:bg-gray-50">
                  Price: Low to High
                </a>
                <a href="/" className="hover:bg-gray-50">
                  Price: High to Low
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-bold text-xs sm:text-sm">PRICE RANGE</h1>
                <a href="/" className="hover:bg-gray-50">
                  All
                </a>
                <a href="/" className="hover:bg-gray-50">
                  $0-$10
                </a>
                <a href="/" className="hover:bg-gray-50">
                  $11-$20
                </a>
                <a href="/" className="hover:bg-gray-50">
                  $21-$30
                </a>
                <a href="/" className="hover:bg-gray-50">
                  $31-$40
                </a>
                <a href="/" className="hover:bg-gray-50">
                  $41-$50
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterProduct;
