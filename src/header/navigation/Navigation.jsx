import React from "react";
import "./Navigation.scss";

import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import menu from "../../assets/menu.svg";

export const NavigationLeft = () => {
  return (
    <>
      <div className="navigation">
        <div className="navigation-wrapper">
          <img className="logo" src={logo} alt="logo" />

          <p className="navigation-item">Exchange</p>

          <p className="navigation-item">Liquidity</p>

          <p className="navigation-item">Mining</p>

          <p className="navigation-item">Developer</p>
        </div>
      </div>
    </>
  );
};

export const NavigationRight = () => {
  return (
    <>
      <div className="menu">
        <div className="header-wrapper">
          <div className="wrapper">
            <button className="menu-button-user">
              <img className="user-profile" src={user} alt="user-profile" />
            </button>

            <button className="connect-wallet">Connect to a wallet</button>

            <button className="menu-button">
              <img className="menu-open" src={menu} alt="user-profile" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
