import { Col, Container, Row } from "react-bootstrap"
import Banner from "../../components/Banner"
import About from "../about"
import Experiences from "../experiences"

const Home = () => {

    return (
        <Container fluid style={{height: "2000px"}}>
            <Row>
                <Banner/>
                <About/>
                <Experiences/>
                {/* Ideia do timeline abortada até pensar em como o site vai ficar */}
                {/* <TimeLine/> */}
            </Row>
        </Container>
    )
}

export default Home