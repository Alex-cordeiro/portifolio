import { Col, Container, Row } from "react-bootstrap";
import { DivMeResume, DivPhotoBackground } from "./styled";
import EU from '../../assets/eu.png'

const About = () => {
    return (
        <>
            <Container style={{backgroundColor: "#252525", padding: "20px"}}>
                <Row>
                    <Col>
                        <DivMeResume>
                            <h3>Sobre Mim:</h3>
                            <p>
                                Me Chamo Alexsander, vulgo Alex. Sou desenvolvedor à 4 anos e atuo na area de TI desde 2018. 
                                Focado em desenvolvimento FullStack, também possuo conhecimento em infraestrutura, proxy, redes e 
                                devops. 

                                Formado em Análise e Desenvolvimento de Sistemas pelo Unicuritiba em 2021 e planejando uma pós graduação em Engenharia 
                                de Software ainda neste ano.
                            </p>
                        </DivMeResume>
                        
                    </Col>
                    <Col>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <DivPhotoBackground>
                                <img src={EU} alt="EU" style={{ 
                                                                width: "100%", 
                                                                height: "100%", 
                                                                objectFit: "fill", 
                                                                borderRadius: "100%", }}
                                                                />
                            </DivPhotoBackground>
                        </div>
                        
                    </Col>
                </Row>
               
            </Container>
           
        </>
    )
}

export default About;