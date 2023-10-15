import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationComponente from "./components/Navigation/Navigation";
import Hauptseite from "./pages/Hauptseite";
import Ueberuns from "./pages/Ueberuns";
import FilmDetails from "./components/Film/Film"
import "./App.css";

function App() {
  return (
    <Router>
      <NavigationComponente className="navigation-container" />
      <Routes>
        <Route path="/" element={<Hauptseite />} />
        <Route path="/film/:name" element={<FilmDetails />} />
        <Route path="/über-uns" element={<Ueberuns />} />
      </Routes>
    </Router>
  );
}

export default App;
