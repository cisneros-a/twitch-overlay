import React from "react";
import BitsImg from "../images/Diamond-1.png";

export default function Bits({ bitCount }) {
  console.log(bitCount);
  return (
    <div className="bits-donation">
      <img src={BitsImg} alt="bits" /> {bitCount}
    </div>
  );
}
