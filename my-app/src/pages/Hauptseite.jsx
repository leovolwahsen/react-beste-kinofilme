import React from "react";
import beliebteFilme from "../assets/daten/beliebte-filme.json";
import KarteComponente from "../components/Karte/Karte";
import ReactStars from "react-rating-stars-component";

export default function Hauptseite() {
  return (
    <div className="grid-container">
      <div className="left-container">
        <h1
          style={{
            color: "white",
          }}
        >
          Aktuelle Top Kinofilme
        </h1>
        <div className="karten-container">
          <KarteComponente />
        </div>
      </div>
      <div className="right-container">
        <h1 style={{
            color: "white",
          }}>Iconische Filme</h1>
        <ul>
          {beliebteFilme.map((beliebterFilm, index) => (
            <li key={index} className="iconische-filme" style={{
              color: "white",
            }}>
              <br />
              {beliebterFilm.name}
              <ReactStars
                count={5}
                value={beliebterFilm.bewertung}
                half={true}
                size={30}
              />{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
