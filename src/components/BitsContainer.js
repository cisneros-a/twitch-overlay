import React from "react";
import Bits from "./Bits";

export default function BitsContainer({ bitsDonations }) {
  console.log(bitsDonations);
  return (
    <div className={"bits-container"}>
      {bitsDonations.map((donation) => {
        return <Bits bitCount={donation.bits} />;
      })}
    </div>
  );
}
