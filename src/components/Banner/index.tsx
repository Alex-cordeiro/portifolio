import { Col, Container, Row } from "react-bootstrap";
import { CustomBannerDiv, StyledH1TypingEffect } from "./styled/styled";
import { useEffect, useState } from "react";
import TextWriter from "./TextWriter";
import AnimationPhoto from "../AnimationPhoto";

const Banner = () => {

  const [textTyping, setTextTyping] = useState(true);
  const textosBanner = [
    "Olá pessoas meu nome é Alexsander",
    "Sejam bem-vindas ao meu portifólio"
  ]

  useEffect(() => {

    console.log(textTyping);
    console.log("mudou aqui ó")
  },[textTyping])

  const handleFinalize = () => {
    console.log("vortei");
    setTextTyping(() => false);
  }

  if(textTyping == true){
    return (
      <CustomBannerDiv>
       <TextWriter
        delay={50}
        textList={textosBanner}
        infinite={true}
        onFinalize={handleFinalize}
       />
      </CustomBannerDiv>
    );
  }
  else{
    return (
      <CustomBannerDiv>
        <AnimationPhoto/>
      </CustomBannerDiv>
    );
  }
 
};

export default Banner;
