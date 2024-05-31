import styled from "styled-components";


export const CustomBannerDiv = styled.div`
    background: url("/src/assets/banner2.png");
    background-repeat: no-repeat, no-repeat;
    background-size: cover;
    /* max-width: 1080px; */
    max-height: 600px;
    min-height: 500px;
    width: 100%;
    
    height: auto;
    padding: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 60px;
    
`
export const StyledH1TypingEffect =  styled.h1`
    overflow: hidden;
    border-right: .15em solid orange;
    margin: 0 auto;
    white-space: nowrap;
    letter-spacing: .15em;
    animation: 
        typing 6s steps(40, end),
        blink-caret .75s step-end infinite;

    color: white;
`;


export const CustomSubTitle = styled.div`

    color: #fff;
    padding: 10px;
`