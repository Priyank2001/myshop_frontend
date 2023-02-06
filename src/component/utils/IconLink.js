import { prettyDOM } from "@testing-library/react";
import React, { useState } from "react";
import "../style/IconLink.css";
function IconLink(props) {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="__parent_div">
      <a
        onMouseEnter={toggle}
        onMouseLeave={toggle}
        href={props.href}
        style={{ color: "black" }}
      >
        {props.icon}
      </a>
    </div>
  );
}

export default IconLink;
