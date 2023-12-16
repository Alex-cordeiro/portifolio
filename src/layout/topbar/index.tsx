import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export function TopBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{"background": "#545454"}}>
      <Container>
        <Navbar.Toggle />
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}
