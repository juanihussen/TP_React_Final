import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p> La pagina que buscaste no existe !.</p>
      <Link to="/">Vuelve al Home</Link>
    </div>
  );
};

export default NotFoundPage;
