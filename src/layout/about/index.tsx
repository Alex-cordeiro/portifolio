import { Col, Container, Row } from "react-bootstrap";
import { DivMeResume, DivPhotoBackground } from "./styled";
import EU from '../../assets/me.png'
import { FaLinkedin } from "react-icons/fa6"; 
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
    return (
        <Container style={{backgroundColor: "#252525", padding: "20px"}} id="about">
            <Row>
                <Col>
                    <DivMeResume>
                        <h3>Sobre Mim:</h3>
                        <p>
                            Me Chamo Alexsander, sou desenvolvedor à 4 anos e atuo na area de TI desde 2018. 
                            Focado em desenvolvimento FullStack, tenho experiência com projetos novos, refatoração e sustaining.
                        </p>
                        <p>
                            Sou formado no curso de Análise e Desenvolvimento de Sistemas pelo Centro universitário Unicuritiba, completando o curso em 2021 e planejando uma pós 
                            graduação em Engenharia de Software.
                        </p>
                        
                    </DivMeResume>
                    
                </Col>
                <Col style={{display: "flex", justifyContent: "center"}}>
                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", paddingTop: "8%"}}>
                        <DivPhotoBackground>
                            <img src={EU} alt="EU" style={{ width: "100%", height: "100%", objectFit: "fill", borderRadius: "100%", }}/>
                        </DivPhotoBackground>
                        <div style={{display: "flex", justifyContent: "space-evenly", width: "auto", height: "auto", marginTop: "20px"}}>
                            <a href="https://www.linkedin.com/in/alexsander-cordeiro-32b83b173/"><FaLinkedin color="#fff" style={{width:"32px", height: "32px"}}/></a>
                            <a href="https://github.com/Alex-cordeiro"><FaGithub color="#fff" style={{width:"32px", height: "32px"}}/></a>
                            <a href="mailto:alexsandercordeiroalves@gmail.com.br"><MdEmail color="#fff" style={{width:"32px", height: "32px"}}/></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About;