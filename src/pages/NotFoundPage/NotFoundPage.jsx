import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css"; // Asegúrate de tener un archivo CSS para estilos personalizados

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
