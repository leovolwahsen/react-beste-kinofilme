import React from "react";
import { useParams } from "react-router-dom";
import kinoFilmeDaten from "../../assets/daten/kino-filme.json";
import ReactStars from "react-rating-stars-component";

function FilmDetails() {
  const { name } = useParams();

  const ausgesuchterFilm = kinoFilmeDaten.find((film) => film.name === name);

  if (!ausgesuchterFilm) {
    return <div>Diesen Film gibt es leider nicht mehr!</div>;
  }
  return (
    <div>
      <h1>{name}</h1>
      <iframe
        width="967,68"
        height="544,32"
        src={ausgesuchterFilm.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture;
        web-share"
        allowfullscreen
      ></iframe>
      <p>© Universal Studios</p>
      <ReactStars
        count={5}
        value={ausgesuchterFilm.bewertung}
        half={true}
        size={40}
      />
    </div>
  );
}
export default FilmDetails;
