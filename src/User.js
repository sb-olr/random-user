import React from "react";
import Contact from "./Contact";

export default function User({ name, age, picture, ...props }) {
  return (
    <div>
      <img src={picture} alt={name} />
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <Contact {...props} />
    </div>
  );
}
