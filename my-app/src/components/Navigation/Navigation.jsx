import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css"

function Navigation() {
  return (
    <Navbar className="container-nav" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="firmenname">
          Beste Kinofilme
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className="hauptseiteLink">
            Hauptseite
          </Nav.Link>
          <Nav.Link href="/über-uns" className="überUnsLink">
            Über uns
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation;






// import { Container, Nav, Navbar } from "react-bootstrap";
// import "./Navigation.css"

// function Navigation() {
//   return (
//     <Navbar className="container-nav" sticky="top">
//       <Container>
//         <Navbar.Brand href="/" className="firmenname">
//           Beste Kinofilme
//         </Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="/" className="hauptseiteLink">
//             Hauptseite
//           </Nav.Link>
//           <Nav.Link href="/über-uns" className="überUnsLink">
//             Über uns
//           </Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   )
// }

// export default Navigation;