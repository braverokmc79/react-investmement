import React from "react";
import logo from "../../assets/investment-calculator-logo.png";
import classes from "./Header.module.css";
import { NavLink, useMatch } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/"}
              className={useMatch("/") ? classes.active : undefined}
            >
              홈
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/investment"}
              className={useMatch("/investment") ? classes.active : undefined}
              end
            >
              투자 계산기
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addUser"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              유저추가
            </NavLink>
          </li>
        </ul>
      </nav>

      <img src={logo} alt="logo" />
      <h1>투자 계산기</h1>
    </header>
  );
};

export default Header;
