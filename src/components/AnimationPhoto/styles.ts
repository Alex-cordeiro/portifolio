import styled, { keyframes } from "styled-components";

export const FadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const RotateY = keyframes`
    0% { transform: rotateY(90deg); }
    25% { transform: rotateY(180deg); }
    50% { transform: rotateY(270deg); }
    100% { transform: rotateY(360deg); }
`;


export const CustomDivImage = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    animation: ${FadeIn} 5s;

`;

export const CustomImgRotate = styled.img`
    animation: ${RotateY} 5s;
`;

export const CustomImgAppear = styled.img`
    animation: ${FadeIn} 5s;
`;

