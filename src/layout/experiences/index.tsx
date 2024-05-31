import { Col, Container, Row } from "react-bootstrap";
import ExperienceItem from "../../components/informationCard";

const Experiences = () => {

    const experienciasProfissionais = [
        {
            "titulo": "Gateware Group",
            "periodo": "Fevereiro de 2023 - atualmente",
            "cargo": "Desenvolvedor FullStack Pleno",
            "atribuicoes": [
                    "Desenvolvimento de novas soluções de back e frontend",
                    "Auxilio à desenvolvedores do time.",
                    "Automações e melhorias de ferramentas internas",
                    
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
        

    ]

    const experienciaEducacional = [
        {
            "organizacao": "Centro Universitário Unicuritiba",
            "periodo": "Outubro de 2019 à Dezembro de 2021",
            "titulo": "Tecnologia em Análise e Desenvolvimento de Sistemas",
        }
    ]

    return (
        <Container style={{padding: "50px", backgroundColor: "#252525"}} id="experiences">
            <Row>
                <Col>
                    <h1 style={{color: "#fff"}}>Experiências Profissionais</h1>
                </Col>
                <Col>
                    <h1 style={{color: "#fff"}}>Formação Acadêmica</h1>
                </Col>
                
            </Row>
            <hr style={{backgroundColor: "#fff", height: "3px", borderRadius: "20px"}}/>
                    <>
                         <Row >
                            <Col xs={6} md={6}>
                                {experienciasProfissionais.map((item, index) => (
                                        <ExperienceItem
                                            title={item.titulo}
                                            atribuicoes={item.atribuicoes}
                                            backgroundColor="#252525"
                                            titleColor="#48BDF0"
                                            borderColor="#252525"
                                            textColor="#fff"
                                            subtitle={`Periodo: ${item.periodo}`}
                                            subtitleColor="#fff"
                                            subtitleOptional={`Cargo: ${item.cargo}`}
                                        />
                                ))}
                            </Col>
                            
                             <Col xs={6} md={6}>
                                {experienciaEducacional.map((item, index) => (
                                    <ExperienceItem
                                        title={item.organizacao}
                                        subtitle={`Período: ${item.periodo}`}
                                        atribuicoes={[`Curso: ${item.titulo}`]}
                                        titleColor="#48BDF0"
                                        borderColor="#252525"
                                        subtitleColor="#fff"
                                    />
                                ))}
                             </Col> 
                        </Row>
                    </>
        </Container>
    )
}

export default Experiences;