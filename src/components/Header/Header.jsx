import React, { useEffect, useState } from "react";
import logo from "../../assets/Amazon-Logo-3.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEcommerceStore } from "../../Store/Ecommercestore";
import Options from "./Option.jsx";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  const { cartLenght } = useEcommerceStore();
  const [showAll, setshowAll] = useState(false);
  return (
    <>
      <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>
      <header
<<<<<<< HEAD
        className="max-width sticky top-0 z-30
=======
        className="max-width sticky top-0 z-10
>>>>>>> 53d02524cda59816099b48a2e8c82e92ddf807d4
       p-4 overflow-hidden bg-slate-900"
      >
        <div className="content flex sm:items-center  flex-col sm:flex-row gap-4  ">
          <Link to="/" className="w-1/6">
            <img
              src={logo}
              alt="logo of amazone"
              className="w-full  object-cover"
            />
          </Link>
          <div className="flex w-full h-10 ">
            <input
              type="text"
              className="w-full border-none outline-none rounded-l-md text-black px-2 "
            />
            <div className="flex items-center bg-orange-500 p-4 rounded-r-md">
              <IoSearchSharp
                fill="black"
                fontSize={20}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex items-center justify-around gap-4 ">
            <div className="border-none text-white  width-full cursor-pointer">
              <select
                name="language"
                className="bg-slate-900  focus:border-none focus:outline-none"
              >
                <option value="Eng">EN</option>
                <option value="PKR">PKR</option>
                <option value="USD">USD</option>
                <option value="IND">IND</option>
              </select>
            </div>
            <div className="flex items-center justify-between text-white flex-col ml-4 whitespace-nowrap text-md">
              <span className="cursor-pointer">Hello, sign in</span>
              <span className="text-lg font-semibold whitespace-nowrap block">
                Account & Lists
              </span>
            </div>
            <div>
              <span className="text-white cursor-pointer">Returnd</span>
              <span className="text-white text-lg font-semibold whitespace-nowrap block">
                & Orders
              </span>
            </div>
            <Link to={"/cart"}>
              <div className="cursor-pointer ">
                <div className="relative ">
                  <svg
                    enableBackground="new 0 0 40 40"
                    id="\u0421\u043B\u043E\u0439_1"
                    version="1.1"
                    viewBox="0 0 40 40"
                    space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <g>
                      <path
                        d="M38.9,11.9c-0.8-0.9-1.9-1.5-3.1-1.5H20.4c-0.5,0-1,0.4-1,1c0,0.6,0.5,1,1,1h15.4c0.6,0,1.2,0.3,1.6,0.7   c0.4,0.5,0.6,1.1,0.4,1.7l-0.9,5h-11c-0.5,0-1,0.4-1,1s0.5,1,1,1h10.7l-0.9,4.8c-0.1,0.7-0.8,1.2-1.5,1.2H15   c-0.7,0-1.3-0.5-1.5-1.2L9.6,4.9c-0.1-0.5-0.5-0.8-1-0.8H0.9c-0.5,0-1,0.4-1,1s0.5,1,1,1h6.9l3.8,21c0.2,1.4,1.2,2.4,2.5,2.8   c-0.5,0.7-0.9,1.6-0.9,2.6c0,2.5,2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5c0-0.9-0.3-1.8-0.8-2.5h6.1c-0.5,0.7-0.8,1.6-0.8,2.5   c0,2.5,2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5c0-1-0.3-1.9-0.8-2.6c1.3-0.3,2.4-1.4,2.7-2.8l2.2-11.8C40,14.1,39.7,12.9,38.9,11.9z    M20.2,32.4c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5S20.2,31,20.2,32.4z M31.3,34.9c-1.4,0-2.5-1.1-2.5-2.5   c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5C33.8,33.8,32.7,34.9,31.3,34.9z"
                        fill="white"
                      />
                    </g>
                  </svg>
                  <span className="absolute -top-4 text-orange-400 right-0">
                    {cartLenght}
                  </span>
                </div>
                <span className="font-semibold text-white ">Cart</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <nav className="max-width bg-slate-800 text-white">
        <div className="content hidden sm:flex items-center gap-4">
          <div
            className="flex items-center gap-1 cursor-pointer border-2 border-transparent px-2 hover:border-2 hover:border-white"
            onClick={() => setshowAll(!showAll)}
          >
            <FaBars />

            <span>All</span>
          </div>
          <ul className="flex gap-4 ">
            <li className="cursor-pointer border-2 border-transparent px-2 hover:border-2 hover:border-white">
              Today's Deals
            </li>
            <li className="cursor-pointer border-2 border-transparent px-2 hover:border-2 hover:border-white">
              Customer Service
            </li>
            <li className="cursor-pointer border-2 border-transparent px-2 hover:border-2 hover:border-white">
              Registry
            </li>
            <li className="cursor-pointer border-2 border-transparent px-2 hover:border-2 hover:border-white">
              Gift Cards
            </li>
            <li className="cursor-pointer border-2 border-transparent px-2 hover:border-2 hover:border-white">
              Sell
            </li>
          </ul>
        </div>
      </nav>
      {showAll && <Options />}
    </>
  );
};

export default Header;
