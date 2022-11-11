import React, { useEffect, useState } from "react";
import "./Main.scss";
import { ExchangeRate } from "./exchange-rate/ExchangeRate.jsx";
import { Rate } from "./rate/Rate";
import { RateChange } from "./rate-change/RateChange";
import { Time } from "./time/Time.jsx";
import { CardExchange } from "./card-exchange/CardExchange.jsx";
import { CoinChart } from "./chart/CoinChart";
import { getFirstCoin, getSecondCoin } from "../services/ExchangeRate";
import { getCoinHistory } from "../services/History";
import { History } from "./history/History";
import { getAllCoins } from "../services/AllCoins";

export const Main = () => {
  const [firstCoin, setFirstCoin] = useState({ id: "bitcoin", symbol: "BTC" });
  const [secondCoin, setSecondCoin] = useState({
    id: "usd-coin",
    symbol: "USDC",
  });
  const [timeRange, setTimeRange] = useState(30);
  const [chartData, setChartData] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [firstCoinPay, setFirstCoinPay] = useState(0);
  const [secondCoinReceive, setSecondCoinReceive] = useState(0);

  useEffect(() => {
    getFirstCoin().then(setFirstCoin);
    getSecondCoin().then(setSecondCoin);

    getAllCoins().then(setAllCoins);
  }, []);

  useEffect(() => {
    getCoinHistory(firstCoin.id, timeRange).then(setChartData);
  }, [firstCoin, timeRange]);

  useEffect(() => {
    setSecondCoinReceive(
      firstCoinPay * (firstCoin.priceUsd / secondCoin.priceUsd)
    );
  }, [firstCoin, secondCoin, firstCoinPay]);

  return (
    <>
      <div className="main">
        <div className="main-wrapper">
          <div className="left-group">
            <ExchangeRate
              firstCoin={firstCoin}
              setFirstCoin={setFirstCoin}
              secondCoin={secondCoin}
              setSecondCoin={setSecondCoin}
            />

            <Rate firstCoin={firstCoin} secondCoin={secondCoin} />

            <div className="time">
              <RateChange timeRange={timeRange} chartData={chartData} />

              <Time timeRange={timeRange} setTimeRange={setTimeRange} />
            </div>

            <CoinChart chartData={chartData} />

            <History />
          </div>

          <div className="right-group">
            <CardExchange
              allCoins={allCoins}
              firstCoinPay={firstCoinPay}
              setFirstCoinPay={setFirstCoinPay}
              secondCoinReceive={secondCoinReceive}
              firstCoin={firstCoin}
              setFirstCoin={setFirstCoin}
              secondCoin={secondCoin}
              setSecondCoin={setSecondCoin}
            />
          </div>
        </div>
      </div>
    </>
  );
};
