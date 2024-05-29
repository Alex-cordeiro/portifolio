import { Col, Container, Row } from "react-bootstrap"
import { DivTimeLineContainer } from "./styled"
import TimeLineItem from "../../components/timeLineItem"
import TimeLineWrapper from "../../components/timeLineWrapper"

const TimeLine = () => {

    const dataTimeLine = [
        {
            title: "Empresa tal",
            year: 2018,
            resume: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
        },
        {
            title: "Empresa tal",
            year: 2018,
            resume: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
        },
        {
            title: "Empresa tal",
            year: 2018,
            resume: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
        },
        {
            title: "Empresa tal",
            year: 2018,
            resume: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
        },
        {
            title: "Empresa tal",
            year: 2018,
            resume: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
        },
    ]
    return (
        <Container style={{overflow: "auto", backgroundColor: "#363636"}}>
            <Row>
                <Col>
                    <h1>Timeline</h1> 
                </Col> 
            </Row>
            <Row>
                <TimeLineWrapper
                    items={dataTimeLine}
                />
            </Row>
        </Container>
    )
}

export default TimeLine;