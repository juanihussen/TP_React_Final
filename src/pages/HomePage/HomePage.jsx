// src/pages/HomePage/HomePage.js
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";
import paisaje from "./img/paisaje.jpg";
import chicaLentes from "./img/fotoLentes.jpg";
import oficina from "./img/oficina.jpg";
import construccion from "./img/construccion.jpg";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <NavBar />
      <div className="cardsContainer">
        <div className="card">
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

        <div className="card">
          <img id="fotoLentes" src={chicaLentes} alt="" />
          <div className="infoContainer">
            <h2>Lentes de Realidad Aumentada Lanzados</h2>
            <p>
              Nuevos lentes ofrecen una experiencia inmersiva con pantalla
              integrada y controles intuitivos. Disponibles el próximo mes para
              profesionales y entusiastas.
            </p>
          </div>
        </div>

        <div className="card">
          <img id="fotoOfi" src={oficina} alt="" />
          <div className="infoContainer">
            <h2>Inauguración de Nueva Oficina Corporativa</h2>
            <p>
              Se abre una moderna oficina en el centro de la ciudad con
              instalaciones de vanguardia. La ceremonia de inauguración será el
              próximo viernes.
            </p>
          </div>
        </div>

        <div className="card">
          <img id="construccion" src={construccion} alt="" />
          <div className="infoContainer">
            <h2>Innovadora Construcción Sustentable en Proceso</h2>
            <p>
              Avanza a buen ritmo la construcción de un edificio diseñado bajo
              los más altos estándares de sostenibilidad. La obra incorpora
              materiales reciclables, tecnologías de energía renovable y
              sistemas de gestión de agua eficientes. Este proyecto marca un
              hito en el compromiso con el medio ambiente y el desarrollo urbano
              responsable, buscando un equilibrio entre modernidad y
              sostenibilidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
