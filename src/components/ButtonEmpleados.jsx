import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ButtonEmpleados = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/employees") {
      navigate("/");
    } else {
      navigate("/employees");
    }
  };

  return (
    <button onClick={handleClick}>
      {location.pathname === "/employees" ? "HomePage" : "Empleados"}
    </button>
  );
};

export default ButtonEmpleados;
