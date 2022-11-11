import "./HeaderSelectButton.scss";
import React from "react";

import liquidity from "../../assets/liquidity-mining.svg";
import trading from "../../assets/trading-mining.svg";

export const HeaderSelectButton = () => {
  return (
    <>
      <div className="vertical-menu">
        <div className="vertical-menu--wrapper">
          <div className="vertical-menu--item">
            <div className="vertical-menu--item__left-group">
              <img className="left-group-icon" src={liquidity} alt="icon" />
            </div>

            <div className="vertical-menu--item__right-group">
              <h1 className="right-group__header">Liquidity Mining</h1>

              <p className="right-group__description">
                Earn FTR rewards by staking assets for market making
              </p>
            </div>
          </div>

          <div className="vertical-menu--item">
            <div className="vertical-menu--item__left-group">
              <img className="left-group-icon" src={trading} alt="icon" />
            </div>

            <div className="vertical-menu--item__right-group">
              <h1 className="right-group__header">Trading Mining</h1>

              <p className="right-group__description">
                Successfully complete a trade to get a FTR airdrop
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
