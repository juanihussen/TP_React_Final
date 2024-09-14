import React from "react";
import "./HomePage.css";
import NavBar from "../../components/navBar/navBar";
import paisaje from "./img/paisaje.jpg";
import chicaLentes from "./img/fotoLentes.jpg";
import oficina from "./img/oficina.jpg";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="navContainer">
        <NavBar />
      </div>

      <div className="seccion">
        <img src={paisaje} alt="" />
        <div className="infoContainer">
          <h2>Nuevo Parque Nacional Descubierto</h2>
          <p>
            Un parque nacional inexplorado revela una biodiversidad única y
            especies nunca documentadas. La apertura al público está prevista
            para el próximo año.
          </p>
        </div>
      </div>

      <div className="seccion">
        <img src={chicaLentes} alt="" />
        <div className="infoContainer">
          <h2>Lentes de Realidad Aumentada Lanzados</h2>
          <p>
            Nuevos lentes ofrecen una experiencia inmersiva con pantalla
            integrada y controles intuitivos. Disponibles el próximo mes para
            profesionales y entusiastas.
          </p>
        </div>
      </div>

      <div className="seccion">
        <img src={oficina} alt="" />
        <div className="infoContainer">
          <h2>Inauguración de Nueva Oficina Corporativa</h2>
          <p>
            Se abre una moderna oficina en el centro de la ciudad con
            instalaciones de vanguardia. La ceremonia de inauguración será el
            próximo viernes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
