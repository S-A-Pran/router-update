import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <NavLink
        className={({ isActive }) => (isActive ? "marked" : undefined)}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "marked" : undefined)}
        to="/friends"
      >
        Friends
      </NavLink>
      {/* <NavLink
        className={({ isActive }) => (isActive ? "marked" : undefined)}
        to="/friend"
      >
        Friend
      </NavLink> */}
    </div>
  );
};

export default Header;
