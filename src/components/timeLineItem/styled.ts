import styled from "styled-components";

export const ContainerItem = styled.div<{$sideAlign: string}>`
    background-color: #081ea2;
    padding: 10px 40px;
    color: darkgrey;
    display: flex;
    justify-content: ${props => props.$sideAlign};
    flex-direction: column;
    // &:before {
    //     content: " ";
    //     height: 0;
    //     position: absolute;
    //     top: 22px;
    //     width: 0;
    //     z-index: 1;
    //     right: 30px;
    //     border: medium solid white;
    //     border-width: 10px 0 10px 10px;
    //     border-color: transparent transparent transparent white;
    // }
    &:after {
        content: " ";
        height: 0;
        position: relative;
        top: 5px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid white;
        border-width: 10px 0 10px 10px;
        border-color: transparent white transparent transparent;
    }
`;