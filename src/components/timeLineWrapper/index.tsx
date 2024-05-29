import { useEffect } from "react";
import { ITimeLineItem } from "../../types/timeline-item.interface";
import { Col, Container, Row } from "react-bootstrap";
import TimeLineItem from "../timeLineItem";

interface ITimeLineWrapperProps {
    items: ITimeLineItem[];
}
const TimeLineWrapper = ({items} : ITimeLineWrapperProps) => {

    const renderTimeLineItem = (item: ITimeLineItem, index: number) => {

        const side = index % 2 === 0 ? 'left' : 'right';

        if (side === 'left'){
            return (
                <Container>
                    <Row>
                        <Col xs={5} md={5}></Col>
                        <Col xs={1} md={1}></Col>
                        <Col xs={5} md={5}>
                            <TimeLineItem
                                resume={item.resume}
                                title={item.title}
                                year={item.year}
                                sideAlign={side}
                            />
                        </Col>
                    </Row>
    
                </Container>
            )
        }else {
            return (
                <Container>
                    <Row>
                        <Col xs={5} md={5}>
                            <TimeLineItem
                                resume={item.resume}
                                title={item.title}
                                year={item.year}
                                sideAlign={side}
                            />
                        </Col>
                        <Col xs={1} md={1}></Col>
                        <Col xs={5} md={5}></Col>
                    </Row>
                </Container>
            )
        }
    }

    return (
        <>
            {items.map((item: ITimeLineItem, index) => (
                renderTimeLineItem(item, index)
            ))}
        </>
    )
}

export default TimeLineWrapper;