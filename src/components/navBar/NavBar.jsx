import React from "react";
import "./NavBar.css";
import ButtonEmpleados from "../ButtonEmpleados";
import LogoutButton from "../LogoutButton";

const NavBar = () => {
  return (
    <nav>
      <LogoutButton />
      <ButtonEmpleados />
    </nav>
  );
};

export default NavBar;
