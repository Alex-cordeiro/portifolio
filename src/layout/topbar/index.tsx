import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export function TopBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{"background": "#48BDF0"}}>
        <Container>
          <Navbar.Toggle />
          <Navbar.Brand href="#home">
            <img 
              src="/src/assets/Logoalex.png"
              alt="Alexsander"
              style={{"width": "60px", "height": "60px" }}/>
          </Navbar.Brand>
          <Nav className="justify-content-end">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    </>
  );
}
