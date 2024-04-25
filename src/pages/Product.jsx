import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { data } from "../data/AllData";
import Slider from "../components/reusable/Slider/Slider";
import "./Product.scss";
import { Datafetch } from "../dataFetch/Datafetch";
import { useEcommerceStore } from "../Store/Ecommercestore";
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
          <div className="product_detail">
            <div className="product_img">
              <img
                src={require(`../assets/products/${img}`)}
                alt="product"
                className="product_img"
              />
              <span className="discount"></span>
            </div>
            <div className="product_detail">
              <div className="product_detail_heading">
                <span className="product_name">{name}</span>
                <div className="similar_line">
                  <span className="brand">Brand:{brand}</span>
                  <span className="product_rating">Ratings {starsNo}</span>
                </div>
              </div>
              <span className="product_price">
                <b> Price:</b> <i>PKR{price}</i>
              </span>

              <span className="product_colors">
                <b>Colors:</b>
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
              </span>
              <span className="seller_name">
                <b>Seller Name:</b>
                {sellerName}
              </span>
              <span className="seller_reviews">
                <b>Seller Reviews</b>
                {sellerReviews}stars
              </span>
              <span className="availability">{availability}</span>
              <span className="product_quantiyt">
                <b> Quantity:</b>
                <p>
                  <span onClick={() => increase(dataAboutItem)}>+</span>
                  {quantity}
                  <span onClick={() => decrease(dataAboutItem)}>-</span>
                </p>{" "}
              </span>
              <span className="product_description">
                <b>About</b>
                <br />
                {product_description}
              </span>
            </div>
            <div className="cta">
              <button
                onClick={() =>
                  Add2Localstorage(
                    dataAboutItem,
                    quantity,
                    (dataFromApi = false)
                  )
                }
              >
                add to cart
              </button>
            </div>
          </div>
          <div className="slider1">
            <Slider
              data={dataFromSimilarStore}
              title={"Similar Products"}
              dataFromApi={false}
            />
          </div>
          <div className="slider2">
            <Slider
              data={dataContainingSimilarRating}
              title={"data containing similar rating"}
              dataFromApi={false}
            />
          </div>
          <div className="review_section">
            <p className="heading">customerReviews</p>
            {customerReviews.map((review, index) => {
              return (
                <div className="review" key={index}>
                  <span className="name">{review.name}</span>
                  <span className="reviews">{review.reviews}</span>
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
            <div className="product_detail">
              <div className="product_img">
                <img src={image} alt="product" className="product_img" />
                <span className="discount"></span>
              </div>
              <div className="product_detail">
                <div className="product_detail_heading">
                  <span className="product_name">{name}</span>
                  <div className="similar_line">
                    <span className="brand">Brand: {brand}</span>
                    <span className="product_rating">
                      Ratings {starsNo.rate}
                    </span>
                  </div>
                </div>
                <span className="product_price">
                  <b> Price:</b> <i>PKR{price}</i>
                </span>

                <span className="product_colors">
                  <b>Colors:</b>
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
                </span>
                <span className="seller_name">
                  <b>Seller Name: </b>
                  {sellerName}
                </span>
                <span className="seller_reviews">
                  <b>Seller Reviews </b>
                  {sellerReviews}stars
                </span>
                <span className="availability">{availability}</span>
                <span className="product_quantiyt">
                  <b> Quantity:</b>
                  <p>
                    <span onClick={() => increase(dataAboutItem)}>+</span>
                    {quantity}
                    <span onClick={() => decrease(dataAboutItem)}>-</span>
                  </p>{" "}
                </span>
                <span className="product_description">
                  <b>About</b>
                  <br />
                  {description}
                </span>
              </div>
              <div className="cta">
                <button
                  onClick={() =>
                    Add2Localstorage(
                      dataAboutItem,
                      quantity,
                      (dataFromApi = true)
                    )
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="slider1">
              <Slider
                data={dataFromSimilarStore}
                title={"Similar Products"}
                dataFromApi={true}
              />
            </div>
            <div className="slider2">
              <Slider
                data={dataContainingSimilarRating}
                title={"data containing similar rating"}
                dataFromApi={true}
              />
            </div>
            <div className="review_section">
              <p className="heading">customerReviews</p>
              {customerReviews.map((review, index) => {
                return (
                  <div className="review" key={index}>
                    <span className="name">{review.name}</span>
                    <span className="reviews">{review.reviews}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    }
  }
};
export default Product;
