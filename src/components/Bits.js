import React from "react";
import BitsImg from "../images/Diamond-1.png";

export default function Bits({ bitCount, index, bitDonationsLength }) {
  return (
    <div
      className={
        index === bitDonationsLength - 1
          ? "latest-bits-donation"
          : "bits-donation"
      }
    >
      <img src={BitsImg} alt="bits" /> {bitCount}
    </div>
  );
}
