import React from "react";
import Bits from "./Bits";

export default function BitsContainer({ bitDonations }) {
  return (
    <div className={"bits-container"}>
      {bitDonations.map((donation, idx) => {
        return (
          <Bits
            className={
              idx === bitDonations.length - 1 ? "latest-bits-donation" : ""
            }
            key={idx}
            bitCount={donation.bits}
            bitDonationsLength={bitDonations.length}
            index={idx}
          />
        );
      })}
    </div>
  );
}
