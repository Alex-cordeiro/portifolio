import styled from "styled-components";


export const StyledH1TypingEffect =  styled.h1`
    overflow: hidden;
    border-right: .15em solid orange;
    margin: 0 auto;
    white-space: nowrap;
    letter-spacing: .15em;
    animation: 
        typing 3s steps(40, end),
        blink-caret .75s step-end infinite;
`;