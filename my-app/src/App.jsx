import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <NavbarComponent />
      <div class="grid-container">
        <div class="left-container">
          <h1>Aktuelle Top Kinofilme</h1>
        </div>
        <div class="right-container">
          <h1>Iconische Filme</h1>
        </div>
      </div>
    </>
  );
}

export default App;
