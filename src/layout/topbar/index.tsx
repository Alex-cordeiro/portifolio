import { Container, Nav, Navbar } from "react-bootstrap";
import { CustomNavBar, CustomNavLink } from "./styled";
import { useEffect, useState } from "react";
import LogoTopBar from "../../assets/logo_topbar.png"

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
      <CustomNavBar data-bs-theme="dark" $hasTransparency={hasRoll} expand="lg" style={{display: "flex", flexDirection: "row"}}>
        <Container>
          <Navbar.Brand href="#home">
            <img 
              src={LogoTopBar}
              alt="Alexsander"
              style={{"width": "150px", "height": "50px" }}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="topbar-nav" />
          </Container>
          <Container>
          
          <Navbar.Collapse id="topbar-nav">
            <Nav className="justify-content-end">
                <CustomNavLink href="#about">Sobre Mim</CustomNavLink>
                <CustomNavLink href="#stacks">Stacks</CustomNavLink>
                <CustomNavLink href="#experiences">Experiências Profissionais</CustomNavLink>
            </Nav>  
          </Navbar.Collapse>
        </Container>
    </CustomNavBar>
    </>
  );
}
