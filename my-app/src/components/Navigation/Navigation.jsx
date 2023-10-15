import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";

function NavigationComponente() {
  return (
    <Navbar id="nav">
      <Container>
        <Navbar.Brand href="/" className="firmenname">
          Beste Kinofilme
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="hautseiteLink">
              Hauptseite
            </Nav.Link>
            <Nav.Link href="/ueber-uns" className="ueberUnsLink">
              Über uns
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationComponente;
