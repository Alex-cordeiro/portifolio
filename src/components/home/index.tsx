import { Col, Container, Row } from "react-bootstrap"
import fotominha from "../../assets/euo.jpg";
export function Home(){

    
    return <>
        <Container style={{ "background":"black", "height": "600px"}} fluid>
            <Row lg={12} style={{}}>
                <Col md="12" style={{"height": "60%",  "textAlign": "center"}}>
                    <div style={{"marginTop":"10%"}} >
                        <img src={fotominha} alt="eu" style={{"width": "200px", "height": "200px", "borderRadius": "400px"}}/>
                    </div>
                    
                    
                </Col>
            </Row>

        </Container>
        
    </>
}