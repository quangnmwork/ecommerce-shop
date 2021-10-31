import React, { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import mobileData from "../mobile-data";
const BestSeller = () => {
  const [productArr, setProductArr] = useState(mobileData);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const productArrHandler = typeFilter => {
    let product = [];
    console.log("Type", typeFilter);
    setProductArr(product);
    mobileData.forEach(item => {
      if (typeFilter === "all") {
        product.push(item);
      } else {
        if (typeFilter === item.type) {
          product.push(item);
        }
      }
    });
    setProductArr(product);
  };
  const itemList = list => {
    return list.map(item => (
      <div className=" sell-animation d-flex flex-column justify-content-center sell-box col-sm-2 align-items-center ">
        <img src={item.img} alt={item.title} className="sell-img" />
        <p className="text-center mt-2 sell-price">${item.price}</p>
        <button className="sell-button-item">Get now</button>
      </div>
    ));
  };

  return (
    <div data-aos="fade-up" className="mt-6">
      <h1 className="text-center ">
        <span className="text-primary">B</span>est Sellers
      </h1>
      <div className="arrival-text mx-auto mb-5 "></div>
      <div className="d-flex justify-content-center">
        <div
          className="sell-button"
          onClick={() => {
            productArrHandler("all");
          }}
        >
          All
        </div>
        <div
          className="sell-button"
          onClick={() => {
            productArrHandler("mobile");
          }}
        >
          Phone
        </div>
        <div
          className="sell-button"
          onClick={() => {
            productArrHandler("tablet");
          }}
        >
          Tablet
        </div>
        <div
          className="sell-button"
          onClick={() => {
            productArrHandler("accesory");
          }}
        >
          Acessory
        </div>
      </div>
      <div className="container sell-list  mt-5">
        <div className="row g-3">{itemList(productArr)}</div>
      </div>
    </div>
  );
};

export default BestSeller;
