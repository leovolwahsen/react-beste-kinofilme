import React from "react";
import beliebteFilme from "./assets/daten/beliebte-filme.json";
import KarteComponente from "./components/Karte/Karte";
import ReactStars from "react-rating-stars-component";

export default function Hauptseite() {
  return (
    <div className="grid-container">
      <div className="left-container">
        <h1>Aktuelle Top Kinofilme</h1>
        <div className="karten-container">
          <KarteComponente />
        </div>
      </div>
      <div className="right-container">
        <h1>Iconische Filme</h1>
        <ul>
          {beliebteFilme.map((beliebterFilm, index) => (
            <li key={index} className="iconische-filme">
              {beliebterFilm.name}
              <ReactStars count={beliebterFilm.bewertung} />{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}