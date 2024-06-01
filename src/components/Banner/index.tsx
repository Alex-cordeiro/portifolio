import { Col, Container, Row } from "react-bootstrap";
import { CustomBannerDiv, CustomSubTitle } from "./styled/styled";
import BannerBackground from "../../assets/banner2.png"

const Banner = () => {
  
  return (
    <>
      <CustomBannerDiv style={{
                                backgroundImage: `url(${BannerBackground})`, 
                                backgroundRepeat: "no-repeat, no-repeat",
                                backgroundSize: "cover"
                              }}>
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
