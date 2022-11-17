import React from "react";
import "./Rate.scss";

export const Rate = ({ firstCoin, secondCoin }) => {
  const price = (firstCoin.priceUsd / secondCoin.priceUsd).toFixed(6);

  return (
    <>
      <div className="rate">
        <p className="rate-number">
          {price} {secondCoin.symbol}
        </p>
      </div>
    </>
  );
};
