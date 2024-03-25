import { Col, Container, Row } from "react-bootstrap";
import { CustomBannerDiv, StyledH1TypingEffect } from "./styled/styled";
import { useEffect, useState } from "react";
import TextWriter from "./TextWriter";

const Banner = () => {

  const textosBanner = [
    "Olá pessoas meu nome é Alexsander",
    "Sejam bem-vindas ao meu portifólio"
  ]

  useEffect(() => {
    
  },[])

  return (
    <CustomBannerDiv>
     <TextWriter
      delay={100}
      textList={textosBanner}
      infinite={true}
     />
    </CustomBannerDiv>
  );
};

export default Banner;
