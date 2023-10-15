import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import kinoFilmeDaten from "../../assets/daten/kino-filme.json";
import "./Karte.css"


function KarteComponente() {
  return (
    
    <div className="karten">
      {kinoFilmeDaten.map((kinoFilm, index) => (
        <Card key={index} style={{ width: "18rem" }} className="karten-item">
          <Card.Img variant="top" src={kinoFilm.bild} alt="Kinofilm Poster"/>
          <Card.Body>
            <Card.Title>{kinoFilm.name}</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default KarteComponente;
