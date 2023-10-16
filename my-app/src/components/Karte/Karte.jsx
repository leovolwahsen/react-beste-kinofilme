import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import kinoFilmeDaten from "../../assets/daten/kino-filme.json";
import "./Karte.css";

function KarteComponente() {
  return (
    <div className="karten">
      {kinoFilmeDaten.map((kinoFilm, index) => (
        <div key={index} className="karten-item">
          {" "}
          <Link to={`/film/${kinoFilm.name}`}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={kinoFilm.bild}
                alt="Kinofilm Poster"
              />
              <Card.Body>
                <Card.Title>{kinoFilm.name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default KarteComponente;
