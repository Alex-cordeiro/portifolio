import styled from "styled-components";


export const CustomTopicContainer = styled.div<{ $borderColor?: string; $borderWidth?: string; $backgroundColor?: string }>`
    padding: 10px;
    border-radius: 20px;
    border-color: ${ props => props.$borderColor || "#000"};
    border-style: solid;
    border-width: ${props => `${props.$borderWidth}px` || "1px" };
    background-color: ${props => props.$backgroundColor || "transparent"}
`;

export const CustomTopicTitle = styled.h2<{$color?: string}>`
    color: ${props => props.$color || "#000"}
`;

export const CustomTopicText = styled.p<{$color?: string}>`
    color: ${props => props.$color || "#000"}
`;

export const CustomUnorderedList = styled.ul`
    list-style-type: none;
`;

export const CustomParagraph = styled.p`
    text-align: justify;
`

