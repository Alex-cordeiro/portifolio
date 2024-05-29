import { Col, Container, Row } from "react-bootstrap";
import { CustomBannerDiv, CustomSubTitle, StyledH1TypingEffect } from "./styled/styled";
import { useEffect, useState } from "react";
import TextWriter from "./TextWriter";

const Banner = () => {

  const [textTyping, setTextTyping] = useState(true);
  const textosBanner = [
    "Desenvolvedor",
    "Músico",
  ]

  useEffect(() => {
  },[textTyping])

  const handleFinalize = () => {
    console.log("vortei");
    setTextTyping(() => false);
  }

  // if(textTyping == true){
  //   return (
  //     <CustomBannerDiv>
  //       {/* {saudacao()} */}
  //      <TextWriter
  //       delay={50}
  //       textList={textosBanner}
  //       infinite={true}
  //       onFinalize={handleFinalize}
  //      />
  //     </CustomBannerDiv>
  //   );
  // }
  // else{
  //   return (
  //     <CustomBannerDiv>
  //       {/* {saudacao()} */}
  //       {/* <AnimationPhoto/> */}
  //     </CustomBannerDiv>
  //   );
  // }

  return (
    <>
    <CustomBannerDiv>
      <Container>
        <Row>
          <Col>
          <CustomSubTitle>
              <div><p>Olá, eu sou Alexsander.</p></div>
              {/* <TextWriter
                delay={50}
                textList={textosBanner}
                infinite={true}
                onFinalize={handleFinalize}
              /> */}
            </CustomSubTitle>
          </Col>
         
        </Row>
      </Container>
      
    </CustomBannerDiv>
      
    </>
  )
 
};

export default Banner;
