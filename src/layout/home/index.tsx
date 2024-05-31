import { Col, Container, Row } from "react-bootstrap"
import Banner from "../../components/Banner"
import About from "../about"
import Experiences from "../experiences"
import Stacks from "@components/stacks"

const Home = () => {

    return (
        <Container fluid>
            <Row>
                <Banner/>
                <About/>
                <Stacks/>
                <Experiences/>
              
                {/* Ideia do timeline abortada até pensar em como o site vai ficar */}
                {/* <TimeLine/> */}
            </Row>
        </Container>
    )
}

export default Home