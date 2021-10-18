import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const services = [
  { name: "Replace tyres", time: "2hr", price: "2000", img: "" },
];

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services">
      <h2 className="mt-5 text-primary">Our Services</h2>
      <div class="services-container">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
