import { Col, Container, Row } from "react-bootstrap";
import { FaReact } from "react-icons/fa";


export function Footer(){
    return (
        <Container style={{backgroundColor: "#252525", color:"#fff", "height": "auto", "maxHeight":"300px", padding: "20px"}} fluid>
            <Row>
               <Col>
               </Col>
               <Col style={{display: "flex", justifyContent: "center"}}>
                    <div>
                        Feito com ❤ usando <FaReact color="#fff"/>
                    </div>
               </Col> 
               <Col>
               </Col>
            </Row>
        </Container>
    )
}