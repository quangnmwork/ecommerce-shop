import React from "react";
import mobileData from "../mobile-data";
import { NavLink } from "react-router-dom";
const Product = () => {
  const listItem = item => {
    return (
      <div
        class="card my-5 py-4 phone-box"
        key={item.id}
        style={{ width: "21rem" }}
      >
        <img src={item.img} class="card-img-top phone-img " alt={item.title} />
        <div class="card-body text-center">
          <h5 class="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <NavLink to={`/product/${item.id}`} class="btn btn-outline-primary">
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row justify-content-evenly">
          {mobileData.map(item => listItem(item))}
        </div>
      </div>
    </div>
  );
};

export default Product;
