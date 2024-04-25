import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { useEcommerceStore } from "../Store/Ecommercestore";
import { useNavigate } from "react-router-dom";
import { data } from "../data/AllData";
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
          <div className="cart-item-detail">
            <div className="heaing">Shopping Cart</div>
            <button className="action">Deselect all items</button>
            <div className="ruler"></div>
            <div className="items">
              {cartDeatil?.map((item) => {
                const { id, img, name, price, quantity, dataFromApi } = item;
                return (
                  <div className="item" key={id}>
                    <input type="checkbox" name="buyStatus" id="buyStatus" />

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
                    <div className="item-detail">
                      <div className="item-top">
                        <div className="item-name">{name}</div>
                        <div className="item-price">
                          <div className="item-price-value">
                            <div className="currency">$</div>
                            <div className="value">{price}</div>
                          </div>
                        </div>
                      </div>
                      <div className="staus">in Stock</div>
                      <div className="color">
                        <b>Color:</b>
                        <span>Yellow</span>
                      </div>

                      <div className="size">
                        <b>Size:</b>
                        <span>Single Can (3 Balls)</span>
                      </div>
                      <div className="quantity">
                        <b>Quantity:</b>
                        <p>{quantity}</p>
                        <select
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
                      <div className="action">
                        <button
                          className="action-btn"
                          onClick={() => remove4rmLocalStorage(id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="more-detail-about-item">
            <div className="cart-item-checkout">
              <div className="heading">
                Subtotal(var items): <span className="price">${Total}</span>
              </div>
              <button className="btn">Proceed to checkout</button>
            </div>
            <div className="frequently-repurchased-items">
              <div className="heading">
                <h4>Explore frequently repurchased items</h4>
                <div className="items">
                  {frequentlyBought.map((item) => {
                    const { img, price } = item;

                    return (
                      <div className="item">
                        <div className="item-img">
                          <img
                            src={require(`../assets/products/${img}`)}
                            alt="title"
                          />
                        </div>
                        <div className="item-detail">
                          <div className="item-title">
                            <h1>Coat</h1>
                          </div>
                          <div className="item-rating">
                            <span className="reviews">
                              {item["stars no"]}stars
                            </span>
                          </div>
                          <div className="item-price">
                            <span className="price">${price}</span>
                          </div>
                          <button
                            className="btn"
                            onClick={() => Add2Localstorage(item)}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
