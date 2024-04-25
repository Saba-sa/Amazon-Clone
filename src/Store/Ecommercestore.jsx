import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ecommerceStore = createContext();
const Ecommercestore = ({ children }) => {
  const [cartLenght, setcartLenght] = useState(0);
  const [cartDeatil, setcartDeatil] = useState([]);
  const [itemAdded, setitemAdded] = useState(false);
  // const [quantity, setquantity] = useState(0);
  useEffect(() => {
    const dataFromLocalStorage =
      JSON.parse(localStorage.getItem("addTocartItem")) || [];
    if (dataFromLocalStorage.length > 0) {
      setcartLenght(dataFromLocalStorage.length);
      setcartDeatil(dataFromLocalStorage);
      console.log("dataFromLocalStorage", cartDeatil);
    }
  }, []);

  const Add2Localstorage = (tempObj, quantity = 1, dataFromApi) => {
    if (quantity === 0) {
      quantity = 1;
    }
    const dataFromLocalStorage =
      JSON.parse(localStorage.getItem("addTocartItem")) || [];
    const existingItem = dataFromLocalStorage.find(
      (item) => item.id === tempObj.id
    );
    if (existingItem) {
      dataFromLocalStorage.map((item) => {
        if (item.id === tempObj.id) {
          existingItem.quantity = quantity;
        }
      });
    } else {
      tempObj.quantity = quantity;
      tempObj.dataFromApi = dataFromApi;
      dataFromLocalStorage.unshift(tempObj);
      setcartLenght(dataFromLocalStorage.length);
      setcartDeatil(dataFromLocalStorage);
    }

    localStorage.setItem("addTocartItem", JSON.stringify(dataFromLocalStorage));
  };
  const remove4rmLocalStorage = (tempObj) => {
    const dataFromLocalStorage =
      JSON.parse(localStorage.getItem("addTocartItem")) || [];
    const existingItem = dataFromLocalStorage.filter(
      (item) => item.id !== tempObj
    );

    setcartLenght(existingItem.length);
    setcartDeatil(existingItem);

    localStorage.setItem("addTocartItem", JSON.stringify(existingItem));
  };

  return (
    <ecommerceStore.Provider
      value={{
        Add2Localstorage,
        cartLenght,
        cartDeatil,
        itemAdded,
        remove4rmLocalStorage,
        setcartDeatil,
      }}
    >
      {children}
    </ecommerceStore.Provider>
  );
};
const useEcommerceStore = () => {
  return useContext(ecommerceStore);
};
export { Ecommercestore, useEcommerceStore };
