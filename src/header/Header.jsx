import React from "react";
import "./Header.scss";
import { NavigationLeft, NavigationRight } from "./navigation/Navigation";

export const Header = () => {
  return (
    <>
        <div className="header">
            <NavigationLeft />

            <NavigationRight />
        </div>
    </>
  );
};
