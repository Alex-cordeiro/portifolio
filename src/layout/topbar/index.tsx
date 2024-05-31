import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { CustomNavBar } from "./styled";
import { useEffect, useState } from "react";

export function TopBar() {
  const [hasRoll, setHasRoll] = useState(false);


  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    
    if(scrollPosition > 0){
      setHasRoll(() => true);
     
    }
    else{
      setHasRoll(() => false);
    
    }
      
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <CustomNavBar data-bs-theme="dark" $hasTransparency={hasRoll}>
        <Container>
          <Navbar.Toggle />
          <Navbar.Brand href="#home">
            <img 
              src="/src/assets/logo_topbar.png"
              alt="Alexsander"
              style={{"width": "150px", "height": "50px" }}/>
          </Navbar.Brand>
          <Nav className="justify-content-end">
              <Nav.Link href="#about">Sobre Mim</Nav.Link>
              <Nav.Link href="#stacks">Stacks</Nav.Link>
              <Nav.Link href="#experiences">Experiências Profissionais</Nav.Link>
          </Nav>
        </Container>
    </CustomNavBar>
    </>
  );
}
