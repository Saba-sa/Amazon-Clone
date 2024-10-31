import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

const Datafetch = ({ url = "products" }) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/${url}`);
        setResult(response.data);
      } catch (error) {
        console.log("error:::::", error);
      }
    };

    fetchData();
  }, [url]);

  // const cachedResult = useMemo(() => result, [result]);

  return result;
};

export { Datafetch };
