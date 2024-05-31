import { Col, Container, Row } from "react-bootstrap";
import { CustomBannerDiv, CustomSubTitle, StyledH1TypingEffect } from "./styled/styled";
import { useEffect, useState } from "react";

const Banner = () => {
  const [init, setInit] = useState(false);
  
  
  return (
    <>
      <CustomBannerDiv>
        <Container>
          <Row>
            <Col>
            <CustomSubTitle>
                <div><p>Olá, eu sou Alexsander.</p></div>
              </CustomSubTitle>
            </Col>
          </Row>
        </Container>
      </CustomBannerDiv>
    </>
  )
};

export default Banner;
