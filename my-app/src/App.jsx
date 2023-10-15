import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationComponente from "./components/Navigation/Navigation";
// import beliebteFilme from "./assets/daten/beliebte-filme.json";
// import KarteComponente from "./components/Karte/Karte";
// import ReactStars from "react-rating-stars-component";
import Hauptseite from "./Hauptseite";
import Ueberuns from "./Ueberuns";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavigationComponente className="navigation-container" />
      <Routes>
        <Route path="/" element={<Hauptseite />} />
        <Route path="/über-uns" element={<Ueberuns />} />
      </Routes>
    </Router>
  );
}

export default App;
