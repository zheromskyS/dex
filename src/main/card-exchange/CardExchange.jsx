import React, { useEffect, useState } from "react";
import "./CardExchange.scss";
import settings from "../../assets/settings.svg";
import flower from "../../assets/flower.svg";
import present from "../../assets/present.svg";
import share from "../../assets/share.svg";
import SelectLabels from "./card-exchange-select-button/CardExchangeSelectButton";

export const CardExchange = ({
  allCoins,
  firstCoinPay,
  setFirstCoinPay,
  secondCoinReceive,
  firstCoin,
  setFirstCoin,
  secondCoin,
  setSecondCoin,
}) => {
  const [firstAllCoins, setFirstAllCoins] = useState([]);
  const [secondAllCoins, setSecondAllCoins] = useState([]);

  useEffect(() => {
    const usdCoin = allCoins.find(({ id }) => id === "usd-coin");

    if (firstCoin.id === usdCoin?.id) {
      setFirstAllCoins([usdCoin]);
      setSecondAllCoins(allCoins);
    } else if (secondCoin.id === usdCoin?.id) {
      setFirstAllCoins(allCoins);
      setSecondAllCoins([usdCoin]);
    }
  }, [allCoins, firstCoin, secondCoin]);

  return (
    <>
      <div className="wrapper">
        <div className="card-exchange">
          <div className="card-exchange--button-wrapper">
            <div className="card-exchange--button-container">
              <button className="card-exchange-button">
                <img
                  src={flower}
                  alt="img"
                  className="card-exchange-button-img"
                />
              </button>

              <button className="card-exchange-button">
                <img
                  src={present}
                  alt="img"
                  className="card-exchange-button-img"
                />
              </button>

              <button className="card-exchange-button">
                <img
                  src={share}
                  alt="img"
                  className="card-exchange-button-img"
                />
              </button>

              <button className="card-exchange-button">
                <img
                  src={settings}
                  alt="img"
                  className="card-exchange-button-img"
                />
              </button>
            </div>
          </div>

          <div className="pay-form">
            <div className="pay-wrapper">
              <div className="pay-text">
                <p className="pay">Pay</p>

                <p className="max-pay">Available: 500</p>
              </div>

              <div className="select-currency">
                <SelectLabels
                  className="select-cryptocurrency"
                  allCoins={firstAllCoins}
                  coin={firstCoin}
                  setCoin={setFirstCoin}
                  />
                <input
                  className="select-currency--input"
                  type="number"
                  value={firstCoinPay}
                  onInput={(e) => setFirstCoinPay(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="receive-form">
            <div className="receive-wrapper">
              <div className="receive-text">
                <p className="receive">Receive</p>

                <p className="max-receive">Available: 1,200</p>
              </div>

              <div className="select-currency">
                <SelectLabels
                  allCoins={secondAllCoins}
                  coin={secondCoin}
                  setCoin={setSecondCoin}
                />

                <p className="select-currency--output">{secondCoinReceive}</p>
              </div>
            </div>
          </div>

          <button
            className="confirm-button"
            onClick={() => {
              const paid = `${firstCoin.symbol}/${secondCoin.symbol}`;
              const price = firstCoinPay;
              const received = secondCoinReceive;

              const table = JSON.parse(localStorage.getItem("abc") || "[]");
              localStorage.setItem(
                "abc",
                JSON.stringify([...table, { paid, price, received }])
              );
            }}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </>
  );
};
