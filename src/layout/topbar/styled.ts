import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";


export interface ICustomNavBar{
    hasTransparency: boolean;
}

export const CustomNavBar = styled(Navbar)<{ $hasTransparency? : boolean;}>`
    background-Color: ${props => props.$hasTransparency ? "rgba(0, 0, 0, 0.4)": "rgba(0, 0, 0, 0)" };
    width: 100%;
    color: black;
    padding: 5px 15px 0px 15px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: ${props => props.$hasTransparency ? "50px" : "70px" }
    transition: top 0.3s;
`

export const CustomNavLink = styled(Nav.Link)`
    color: #fff;
    &:hover {
        color: #A9A9A9;
    }
`;