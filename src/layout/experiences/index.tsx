import { Col, Container, Row } from "react-bootstrap";
import ExperienceItem from "../../components/informationCard";
import StackContainer from "../../components/StackContainer";

const Experiences = () => {

    const experienciasProfissionais = [
        {
            "titulo": "Telemetrix Intelligence LTDA",
            "periodo": "Junho de 2022 à Junho de 2023",
            "cargo": "Desenvolvedor FullStack Júnior",
            "atribuicoes": [
                    "Manutenção de sistemas legados utilizando ASP.NET WebForms e desenvolvimento de novas ferramentas com .NET Core e frameworks JavaScript como React e Angular",
                    "Integração com APIs de terceiros, como Correios e plataformas de notas fiscais eletrônicas.",
                    "Colaboração em projetos de migração de tecnologia para melhorar a escalabilidade e eficiência"
            ],
            "tecnologias": [
                "react",
                "dotnetcore",
                "microsoftsqlserver",
                "azuredevops",
                "angular"
            ]
        },
        {
            "titulo": "Houseasy Automação Residencial",
            "periodo": "Julho de 2023 à Setembro de 2023",
            "cargo": "Desenvolvedor Backend Pleno",
            "atribuicoes": [
                    "Desenvolvimento de sistemas backend, incluindo Web APIs e integração com ERPs de clientes e parceiros.",
                    "Utilização do protocolo MQTT para comunicação entre backend e dispositivos embarcados.",
                    "Contribuição para a melhoria e otimização de processos internos participando das tomadas de decisões a respeito da arquitetura e metodologias utilizadas nos sistemas.",
            ],
            "tecnologias": [
                "dotnetcore",
                "microsoftsqlserver",
                "azuredevops"
            ]
        },
        {
            "titulo": "Cogecom - Cooperativa de Geração Compartilhada",
            "periodo": "Setembro de 2023 à Fevereiro de 2024",
            "cargo": "Desenvolvedor FullStack Pleno",
            "atribuicoes": [
                    "Desenvolvimento, análise e melhorias de sistemas internos.",
                    "Otimização de processos internos.",
                    "Contribuição para a melhoria e otimização de processos internos participando das tomadas de decisões a respeito da arquitetura e metodologias utilizadas nos sistemas.",
                    "Gestão e supervisão de equipe, quebra e planejamento de tarefas",
                    "Implantação de novos sistemas.",
                    "CI/CD utilizando Azure Devops.",
                    "Conteinerização de aplicações usando Azure.",
            ],
            "tecnologias": [
                "dotnetcore",
                "microsoftsqlserver",
                "azuredevops",
                "docker",
                "fastapi",
                "javascript",
                "angular"
            ]
        }

    ]


    return (
        <Container style={{padding: "50px", backgroundColor: "#252525"}}>
            <Row>
                <h1 style={{color: "#fff"}}>Experiências Profissionais</h1>
            </Row>
            <hr style={{backgroundColor: "#fff", height: "3px", borderRadius: "20px"}}/>
           
                {experienciasProfissionais.map((item, index) => (
                    <>
                         <Row >
                            <Col xs={6} md={6}>

                                        <ExperienceItem
                                            title={item.titulo}
                                            atribuicoes={item.atribuicoes}
                                            backgroundColor="#252525"
                                            titleColor="#48BDF0"
                                            borderColor="#252525"
                                            textColor="#fff"
                                            subtitle={item.periodo}
                                            subtitleColor="#fff"
                                        />
                            </Col>
                            
                             <Col xs={6} md={6}>
                                {item.tecnologias.map((stack, stackIndex) => (
                                    <>
                                        <StackContainer
                                            imageAlt={stack}
                                            imageName={stack}
                                            key={stackIndex}
                                        />
                                    </>
                                ))}
                             </Col> 
                        </Row>
                    </>
                ))}
              
             

               
        </Container>
    )
}

export default Experiences;