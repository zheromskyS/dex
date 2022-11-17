import React from "react";
import "./ExchangeRate.scss";
import reverse from "../../assets/reverse.svg";

export const ExchangeRate = ({
  firstCoin,
  setFirstCoin,
  secondCoin,
  setSecondCoin,
}) => {
  const handleReverseCurrencyBtnClick = () => {
    setSecondCoin(firstCoin);
    setFirstCoin(secondCoin);
  };

  return (
    <>
      <div className="exchange-rate">
        <div className="exchange-rate--image-container">
          <img className="exchange-rate--currency-image" src="" alt="" />

          <img className="exchange-rate--currency-image" src="" alt="" />
        </div>

        <div className="exchange-rate--currency">
          <span className="currency--first-item">{firstCoin.symbol}/</span>

          <span className="currency--second-item">{secondCoin.symbol}</span>
        </div>

        <button
          className="reverse-currency--button"
          onClick={handleReverseCurrencyBtnClick}
        >
          <img className="reverse-currency" src={reverse} alt="" />
        </button>
      </div>
    </>
  );
};
