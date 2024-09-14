import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonEmpleados = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/employees");
  };

  return <button onClick={handleClick}>Empleados</button>;
};

export default ButtonEmpleados;
