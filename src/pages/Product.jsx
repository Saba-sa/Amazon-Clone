import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { data } from "../data/AllData";
import SliderComponent from "../components/reusable/Slider/SliderComponent";
import "./Product.scss";
import { Datafetch } from "../dataFetch/Datafetch";
import { useEcommerceStore } from "../Store/Ecommercestore";
import Loader from "../components/Loader/Loader";
const Product = () => {
  const { id } = useParams();
  const { Add2Localstorage } = useEcommerceStore();
  const location = useLocation();
  const [quantity, setQuantity] = useState(0);
  let dataFromApi;
  const increase = (data) => {
    if (data.hasOwnProperty("quantity")) {
      data.quantity += 1;
      setQuantity(data.quantity);
    } else {
      data.quantity = 1;
      setQuantity(data.quantity);
    }
  };

  const decrease = (data) => {
    if (data.hasOwnProperty("quantity") && data.quantity >= 1) {
      data.quantity -= 1;
      setQuantity(data.quantity);
    } else {
      data.quantity = 0;
      setQuantity(data.quantity);
    }
  };
  if (location.state === null || location.state === undefined) {
    location.state = "no";
  }
  if (location.state === "no") {
    const dataAboutItem = data?.find((item) => item.id === parseInt(id));
    const dataFromSimilarStore = data?.filter(
      (item) => item["seller Name"] === data[0]["seller Name"]
    );
    const dataContainingSimilarRating = data?.filter(
      (item) => item["stars no"] === data[0]["stars no"]
    );
    const {
      name,
      img,
      customerReviews,
      "stars no": starsNo,
      price,
      brand,
      discount,
      "seller Name": sellerName,
      "seller reviews": sellerReviews,
      availability,
      colors_avaiable,
      product_description,
      quantity = 0,
    } = dataAboutItem;

    return (
      <section className="product_section">
        <div className="content">
          <div className="bg-gray-100 dark:bg-gray-800 py-8 mb-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="h-[460px]  rounded-lg bg-white dark:bg-gray-700 mb-4">
                    <img
                      src={require(`../assets/products/${img}`)}
                      alt="product"
                      className="w-full"
                    />{" "}
                  </div>
                  <div className="flex -mx-2 mb-4">
                    <div className="w-full px-2">
                      <button
                        className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                        onClick={() =>
                          Add2Localstorage(
                            dataAboutItem,
                            quantity,
                            (dataFromApi = true)
                          )
                        }
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {name}
                  </h2>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    ||{brand}
                  </h4>

                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Price:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        ${price}
                      </span>
                    </div>
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Availability:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {availability ? "In stock" : "Out of stock"}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Ratings:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {starsNo.rate}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Select Color:
                    </span>
                    <div className="flex items-center mt-2 mb-2">
                      {colors_avaiable.map((color, index) => {
                        return (
                          <input
                            type="color"
                            key={index}
                            value={color}
                            readOnly
                            disabled
                          />
                        );
                      })}
                    </div>
                    <span className="product_quantiyt ">
                      <b> Quantity:</b>
                      <button
                        className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-1 px-2 rounded ml-4 font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                        onClick={() => increase(dataAboutItem)}
                      >
                        +
                      </button>

                      {quantity}
                      <button
                        className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-1 px-2 rounded  ml-2 font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                        onClick={() => decrease(dataAboutItem)}
                      >
                        -
                      </button>
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Select Size:
                    </span>
                    <div className="flex items-center mt-2">
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        S
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        M
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        L
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        XL
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        XXL
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Product Description:
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {product_description}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed sed ante justo. Integer euismod libero id mauris
                      malesuada tincidunt. Vivamus commodo nulla ut lorem
                      rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et
                      venenatis sem blandit. Quisque ut erat vitae nisi ultrices
                      placerat non eget velit. Integer ornare mi sed ipsum
                      lacinia, non sagittis mauris blandit. Morbi fermentum
                      libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider1">
            <SliderComponent
              data={dataFromSimilarStore}
              title={"Similar Products"}
              dataFromApi={false}
            />
          </div>
          <div className="slider2">
            <SliderComponent
              data={dataContainingSimilarRating}
              title={"data containing similar rating"}
              dataFromApi={false}
            />
          </div>
          <div className="review_section">
            <p className="heading">customerReviews</p>

            {customerReviews.map((review, index) => {
              return (
                <div className="flex items-start mb-8" key={index}>
                  <div className="flex-shrink-0">
                    <div className="inline-block relative">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <img
                          className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                          src="https://picsum.photos/id/646/200/200"
                          alt="Profile"
                        />
                        <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner" />
                      </div>
                      <svg
                        className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6">
                    <p className="flex items-baseline">
                      <span className="text-gray-600 font-bold">Mary T.</span>
                      <span className="ml-2 text-green-600 text-xs">
                        Verified Buyer
                      </span>
                    </p>
                    <div className="flex items-center mt-1">
                      <svg
                        className="w-4 h-4 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-4 h-4 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-4 h-4 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-4 h-4 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-4 h-4 fill-current text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </div>
                    <div className="flex items-center mt-4 text-gray-600">
                      <div className="flex items-center">
                        <span className="text-sm">Product Quality</span>
                        <div className="flex items-center ml-2">
                          <svg
                            className="w-3 h-3 fill-current text-yellow-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <svg
                            className="w-3 h-3 fill-current text-yellow-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <svg
                            className="w-3 h-3 fill-current text-yellow-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <svg
                            className="w-3 h-3 fill-current text-yellow-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <svg
                            className="w-3 h-3 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center ml-4">
                        <span className="text-sm">Purchasing Experience</span>
                        <div className="flex items-center ml-2">
                          <svg
                            className="w-3 h-3 fill-current text-yellow-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <svg
                            className="w-3 h-3 fill-current text-yellow-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <svg
                            className="w-3 h-3 fill-current text-yellow-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <svg
                            className="w-3 h-3 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <svg
                            className="w-3 h-3 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="font-bold">{review.name}h Steiner </span>
                      <p className="mt-1">
                        {review.reviews}Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                      <button className="flex items-center">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
                        </svg>
                        <span className="ml-2">Share</span>
                      </button>
                      <div className="flex items-center">
                        <span>Was this review helplful?</span>
                        <button className="flex items-center ml-6">
                          <svg
                            className="w-3 h-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                          </svg>
                          <span className="ml-2">56</span>
                        </button>
                        <button className="flex items-center ml-4">
                          <svg
                            className="w-3 h-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                          </svg>
                          <span className="ml-2">10</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    const dataAboutItem = Datafetch({ url: `products/${id}` });
    const wholeData = Datafetch({ url: "products" });
    const dataFromSimilarStore = wholeData?.filter(
      (item) => item.category === dataAboutItem.category
    );
    const dataContainingSimilarRating = wholeData?.filter(
      (item) => item.category === dataAboutItem.category
    );

    const {
      title: name = "default Name",
      image,
      customerReviews = [
        { name: "default", reviews: "default" },
        { name: "default", reviews: "default" },
      ],
      rating: starsNo = 5,
      price,
      category: brand = "default",
      discount = 45,
      "seller Name": sellerName = "SSDFSDFSDFSD",
      "seller reviews": sellerReviews = 4,
      availability = true,
      colors_avaiable = ["#a83232", "#32a83a", "#a8a632", "#a8a232"],
      description,
    } = dataAboutItem;

    if (Object.keys(dataAboutItem).length > 0) {
      return (
        <section className="product_section">
          <div className="content">
            <div className="bg-gray-100 dark:bg-gray-800 py-8 mb-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                  <div className="md:flex-1 px-4">
                    <div className=" rounded-lg bg-white dark:bg-gray-700 mb-4">
                      <img src={image} alt="product" className="w-full" />
                    </div>
                    <div className="flex -mx-2 mb-4">
                      <div className="w-full px-2">
                        <button
                          className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                          onClick={() =>
                            Add2Localstorage(
                              dataAboutItem,
                              quantity,
                              (dataFromApi = true)
                            )
                          }
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex-1 px-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {name}
                    </h2>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      ||{brand}
                    </h4>

                    <div className="flex mb-4">
                      <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                          Price:
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          ${price}
                        </span>
                      </div>
                      <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                          Availability:
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {availability ? "In stock" : "Out of stock"}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                          Ratings:
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {starsNo.rate}
                        </span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Select Color:
                      </span>
                      <div className="flex items-center mt-2 mb-2">
                        {colors_avaiable.map((color, index) => {
                          return (
                            <input
                              type="color"
                              key={index}
                              value={color}
                              readOnly
                              disabled
                            />
                          );
                        })}
                      </div>
                      <span className="product_quantiyt ">
                        <b> Quantity:</b>
                        <button
                          className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-1 px-2 rounded ml-4 font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                          onClick={() => increase(dataAboutItem)}
                        >
                          +
                        </button>

                        {quantity}
                        <button
                          className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-1 px-2 rounded  ml-2 font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                          onClick={() => decrease(dataAboutItem)}
                        >
                          -
                        </button>
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Select Size:
                      </span>
                      <div className="flex items-center mt-2">
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          S
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          M
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          L
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          XL
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          XXL
                        </button>
                      </div>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Product Description:
                      </span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {description}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sed ante justo. Integer euismod libero id mauris
                        malesuada tincidunt. Vivamus commodo nulla ut lorem
                        rhoncus aliquet. Duis dapibus augue vel ipsum pretium,
                        et venenatis sem blandit. Quisque ut erat vitae nisi
                        ultrices placerat non eget velit. Integer ornare mi sed
                        ipsum lacinia, non sagittis mauris blandit. Morbi
                        fermentum libero vel nisl suscipit, nec tincidunt mi
                        consectetur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider1">
              <SliderComponent
                data={dataFromSimilarStore}
                title={"Similar Products"}
                dataFromApi={true}
              />
            </div>
            <div className="slider2">
              <SliderComponent
                data={dataContainingSimilarRating}
                title={"data containing similar rating"}
                dataFromApi={true}
              />
            </div>
            <div className="review_section">
              <h1 className=" mb-4 font-semibold text-2xl">Customer Reviews</h1>

              {customerReviews.map((review, index) => {
                return (
                  <div className="flex items-start mb-8" key={index}>
                    <div className="flex-shrink-0">
                      <div className="inline-block relative">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <img
                            className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                            src="https://picsum.photos/id/646/200/200"
                            alt="Profile"
                          />
                          <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner" />
                        </div>
                        <svg
                          className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <p className="flex items-baseline">
                        <span className="text-gray-600 font-bold">Mary T.</span>
                        <span className="ml-2 text-green-600 text-xs">
                          Verified Buyer
                        </span>
                      </p>
                      <div className="flex items-center mt-1">
                        <svg
                          className="w-4 h-4 fill-current text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-4 h-4 fill-current text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-4 h-4 fill-current text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-4 h-4 fill-current text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="w-4 h-4 fill-current text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      </div>
                      <div className="flex items-center mt-4 text-gray-600">
                        <div className="flex items-center">
                          <span className="text-sm">Product Quality</span>
                          <div className="flex items-center ml-2">
                            <svg
                              className="w-3 h-3 fill-current text-yellow-600"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <svg
                              className="w-3 h-3 fill-current text-yellow-600"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <svg
                              className="w-3 h-3 fill-current text-yellow-600"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <svg
                              className="w-3 h-3 fill-current text-yellow-600"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <svg
                              className="w-3 h-3 fill-current text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex items-center ml-4">
                          <span className="text-sm">Purchasing Experience</span>
                          <div className="flex items-center ml-2">
                            <svg
                              className="w-3 h-3 fill-current text-yellow-600"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <svg
                              className="w-3 h-3 fill-current text-yellow-600"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <svg
                              className="w-3 h-3 fill-current text-yellow-600"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <svg
                              className="w-3 h-3 fill-current text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <svg
                              className="w-3 h-3 fill-current text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <span className="font-bold">
                          {review.name}h Steiner{" "}
                        </span>
                        <p className="mt-1">
                          {review.reviews}Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                        <button className="flex items-center">
                          <svg
                            className="w-3 h-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
                          </svg>
                          <span className="ml-2">Share</span>
                        </button>
                        <div className="flex items-center">
                          <span>Was this review helplful?</span>
                          <button className="flex items-center ml-6">
                            <svg
                              className="w-3 h-3"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                            </svg>
                            <span className="ml-2">56</span>
                          </button>
                          <button className="flex items-center ml-4">
                            <svg
                              className="w-3 h-3"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                            </svg>
                            <span className="ml-2">10</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <>
          <Loader />
        </>
      );
    }
  }
};
export default Product;
