import { Container } from "react-bootstrap";

export function Footer(){
    return (
        <>
            <Container style={{"background": "blue", "height": "20%", "maxHeight":"300px"}} fluid>
                <h1>eu sou o footer!</h1>
            </Container>
        </>
    )
}