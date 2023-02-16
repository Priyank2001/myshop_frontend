import React from "react";
import "./style/AdminTopBar.css";
import { Link } from "react-router-dom";
var endpoints = require("../Endpoints");

class LabelOptions {
  constructor(label, link) {
    this.label = label;
    this.link = link;
  }
}

function AdminTopBar() {
  const options = [
    new LabelOptions("Users", `${endpoints.userEndpoints.USERS}`),
    new LabelOptions("Products", "/products"),
    new LabelOptions("Categories", "/users"),
    new LabelOptions("Brands", "/users"),
    new LabelOptions("Customers", "/users"),
    new LabelOptions("Shipping", "/users"),
    new LabelOptions("Sales Report", "/users"),
    new LabelOptions("Orders", "/users"),
    new LabelOptions("Articles", "/users"),
    new LabelOptions("Menu", "/"),
    new LabelOptions("Settings", "/"),
  ];

  const str = "/myshopadmin";
  return (
    <div className="__admin_top_bar">
      <img
        src="https://w7.pngwing.com/pngs/288/368/png-transparent-red-and-white-shop-illustration-text-brand-illustration-shop-text-retail-rectangle.png"
        alt="Myshop App"
      />

      <div className="__admin_top_bar_labels_div">
        {options.map((item, idx) => (
          <div key={idx} className="__admin_top_bar_labels">
            <Link to={str + item.link}>{item.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminTopBar;
