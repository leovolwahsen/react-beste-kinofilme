import React from "react";
import { useParams } from "react-router-dom";
import kinoFilmeDaten from "../../assets/daten/kino-filme.json";
import ReactStars from "react-rating-stars-component";
import "./Film.css";

function FilmDetails() {
  const { name } = useParams();

  const ausgesuchterFilm = kinoFilmeDaten.find((film) => film.name === name);

  if (!ausgesuchterFilm) {
    return <div>Diesen Film gibt es leider nicht mehr!</div>;
  }
  return (
    <div className="Film-container">
      <div className="film-daten">
        <article>
          <h1>{name}</h1>
          <h6>Kinostart: 17.11.2023 - Dramafilm - 130 Min</h6>
          <div className="bewerbung" >
            <ReactStars
              count={5}
              value={ausgesuchterFilm.bewertung}
              half={true}
              size={40}
            />
          </div>

          <iframe
            width="967,68"
            height="544,32"
            src={ausgesuchterFilm.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture;
        web-share"
            allowFullScreen
          ></iframe>
          <p>© Universal Studios</p>
        </article>
        <div className="oben">
          <div className="links">
            <div className="ansicht">
              <img src={ausgesuchterFilm.bild} alt="Kinofilm" />
            </div>
          </div>
          <div className="rechts">
            <div className="beschreibung">{ausgesuchterFilm.beschreibung}</div>
          </div>
        </div>
      </div>
      <div className="unten"></div>
    </div>
  );
}
export default FilmDetails;
