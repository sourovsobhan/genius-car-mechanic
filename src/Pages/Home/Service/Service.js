import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  //   const { id, name, description, img } = props.service;
  const { id, name, price, description, img } = service;
  return (
    <div className="service pb-3">
      <img src={img} alt="" srcset="" />
      <h2>{name}</h2>
      <h3>{price}</h3>
      <p className="px-3">{description}</p>
      <Link to={`/booking/${id}`}>
        <button className="btn btn-warning">Book{name.toLowerCase()}</button>
      </Link>
    </div>
  );
};

export default Service;
