import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationComponente from "./components/Navigation/Navigation";
import Hauptseite from "./pages/Hauptseite";
import Ueberuns from "./pages/Ueberuns";
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
