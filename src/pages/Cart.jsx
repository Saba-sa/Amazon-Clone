import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { useEcommerceStore } from "../Store/Ecommercestore";
import { useNavigate } from "react-router-dom";
import { data } from "../data/AllData";
import SliderComponent from "../components/reusable/Slider/SliderComponent";
const Cart = ({ signin = true }) => {
  const navigator = useNavigate();
  const { Add2Localstorage, cartDeatil, setcartDeatil, remove4rmLocalStorage } =
    useEcommerceStore();
  const [Total, setTotal] = useState(0);
  const [frequentlyBought, setfrequentlyBought] = useState([]);
  useEffect(() => {
    const temp = data.filter((item) => {
      if (item["stars no"] > 4) {
        const existence = cartDeatil.find((i) => i.id !== item.id);
        if (existence) {
          return item;
        }
      }
    });
    setfrequentlyBought(temp);
  }, [data, cartDeatil]);

  useEffect(() => {
    const totalPrice = cartDeatil.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      return total + itemTotal;
    }, 0);
    setTotal(Math.ceil(totalPrice));
  }, [cartDeatil]);
  const updateQuantity = (e, item) => {
    cartDeatil.map((i) => {
      if (i.id === item.id) {
        i.quantity = e.target.value;
      }
    });
    localStorage.setItem("addTocartItem", JSON.stringify(cartDeatil));
    setcartDeatil(JSON.parse(localStorage.getItem("addTocartItem")));
  };
  return (
    <section className="cart-section">
      {cartDeatil.length === 0 ? (
        <div className="content">
          <div className="no-items-ui">
            <div className="cart-img">
              <img src={require("../assets/cart.svg")} alt="" />
            </div>
            <div className="cart-detail">
              <h1>Your Amazone Cart is empty</h1>
            </div>
            <div className="btns">
              {signin ? (
                <>
                  <button
                    className="btn btn-1"
                    onClick={() => navigator("/ProductsDisplay")}
                  >
                    Check Out Products
                  </button>
                  <button className="btn btn-2" onClick={() => navigator("/")}>
                    Back to home
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn1">Sign in to your account</button>
                  <button className="btn btn2">Sign up now</button>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="contains-item-ui">
          <div className="container mx-auto ">
            <div className="sm:flex shadow-md mb-4  gap-6">
              <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
                <div className="flex justify-between border-b pb-8">
                  <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                  <h2 className="font-semibold text-2xl">3 Items</h2>
                </div>
                {cartDeatil?.map((item) => {
                  const { id, img, name, price, quantity, dataFromApi } = item;
                  return (
                    <div key={id}>
                      <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                        <div className="md:w-4/12 2xl:w-1/4 w-full">
                          {dataFromApi ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="api-img"
                            />
                          ) : (
                            <img
                              src={require(`../assets/products/${img}`)}
                              alt="desktop"
                            />
                          )}
                        </div>
                        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                          <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                            RF293
                          </p>
                          <div className="flex items-center justify-between w-full">
                            <p className="text-base font-black leading-none text-gray-800">
                              {name}
                            </p>
                            <select
                              aria-label="Select quantity"
                              className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                              name="quantity"
                              id="quantity"
                              onChange={(e) => updateQuantity(e, item)}
                            >
                              <option value="quantity" selected disabled>
                                quantity select
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>
                          </div>
                          <p className="text-xs leading-3 text-gray-600 pt-2"></p>
                          <p className="text-xs leading-3 text-gray-600 py-4">
                            Color: Black default
                          </p>

                          <div className="flex items-center justify-between pt-5">
                            <div className="flex itemms-center">
                              <p
                                className="text-xs leading-3  text-red-500 pl-5 cursor-pointer"
                                onClick={() => remove4rmLocalStorage(id)}
                              >
                                Remove
                              </p>
                            </div>
                            <p className="text-base font-black leading-none text-gray-800">
                              {price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                id="summary"
                className="w-full  mt-4 sm:w-1/4   md:w-1/2   px-8 py-10 bg-white "
              >
                <h1 className="font-semibold text-2xl border-b pb-8">
                  Order Summary
                </h1>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase">
                    Items {cartDeatil.length}
                  </span>
                  <span className="font-semibold text-sm">price$</span>
                </div>
                <div>
                  <label className="font-medium inline-block mb-3 text-sm uppercase">
                    Shipping
                  </label>
                  <select className="block p-2 text-gray-600 w-full text-sm">
                    <option>Standard shipping - $10.00</option>
                  </select>
                </div>
                <div className="py-10">
                  <label
                    htmlFor="promo"
                    className="font-semibold inline-block mb-3 text-sm uppercase"
                  >
                    Promo Code
                  </label>
                  <input
                    type="text"
                    id="promo"
                    placeholder="Enter your code"
                    className="p-2 text-sm w-full"
                  />
                </div>
                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                  Apply
                </button>
                <div className="border-t mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>${Total}</span>
                  </div>
                  <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
            <SliderComponent
              data={frequentlyBought}
              title="Explore frequently repurchased items"
              dataFromApi={false}
            />
          </div>
        </div>
      )}
      ;
    </section>
  );
};

export default Cart;
