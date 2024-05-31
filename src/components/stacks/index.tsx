import { Col, Container, Row } from "react-bootstrap"
import { CustomDivStackContainer, CustomImgLogos } from "./styled";
import ReactLogo from '../../assets/logos/react.svg';
import DotnetCore from '../../assets/logos/dotnetcore.svg';
import DockerLogo from '../../assets/logos/docker.svg';
import MicrosoftSqlServerLogo from '../../assets/logos/microsoftsqlserver.svg'
import MySqlLogo from '../../assets/logos/mysql.svg'
import NodeJsLogo from '../../assets/logos/nodejs.svg'



 const Stacks = () => {
    return (
        <Container  style={{backgroundColor: "#252525", padding: "20px"}} id="stacks">
            <Row>
                <Col style={{paddingLeft: "40px", color: "#DCDCDC"}}>
                    <h1 style={{color:"#fff"}}>Principais Stacks</h1>
                    <hr style={{backgroundColor: "#fff", height: "3px", borderRadius: "20px"}}/>
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <CustomDivStackContainer>
                        <CustomImgLogos src={ReactLogo} alt="react" />
                    </CustomDivStackContainer>
                </Col>
                <Col sm>
                    <CustomDivStackContainer>
                        <CustomImgLogos src={DotnetCore} alt="Dotnet" />
                    </CustomDivStackContainer>
                </Col>
                <Col sm>
                    <CustomDivStackContainer>
                        <CustomImgLogos src={DockerLogo} alt="Docker" />
                    </CustomDivStackContainer>
                </Col>
                <Col sm>
                    <CustomDivStackContainer>
                        <CustomImgLogos src={MicrosoftSqlServerLogo} alt="SQLServer" />
                    </CustomDivStackContainer>
                </Col>
                <Col sm>
                    <CustomDivStackContainer>
                        <CustomImgLogos src={MySqlLogo} alt="SQLServer" />
                    </CustomDivStackContainer>
                </Col>
                <Col sm>
                    <CustomDivStackContainer>
                        <CustomImgLogos src={NodeJsLogo} alt="SQLServer" />
                    </CustomDivStackContainer>
                </Col>
            </Row>
        </Container>
    )
}

export default Stacks