import { CustomTopicContainer, CustomTopicText, CustomTopicTitle, CustomUnorderedList, CustomParagraph } from "./styled"

interface InformationCardProps {
    borderColor?: string;
    borderWidth?: string;
    backgroundColor?: string;
    titleColor?: string;
    title: string;
    atribuicoes: string[];
    textColor?: string;
    subtitle?: string;
    subtitleColor?: string;
    subtitleOptional?: string;
    subtitleOptionalColor?: string;
}
const InformationCard = (
                            {
                                borderColor, 
                                borderWidth, 
                                backgroundColor,
                                title, 
                                titleColor, 
                                atribuicoes, 
                                textColor,
                                subtitle, 
                                subtitleColor,
                                subtitleOptional,
                                subtitleOptionalColor
                            }: InformationCardProps) => {

    return (
        <CustomTopicContainer
            $borderColor={borderColor}
            $borderWidth={borderWidth}
            $backgroundColor={backgroundColor}
        >
            <CustomTopicTitle $color={titleColor}>{title}</CustomTopicTitle>

            {subtitle != undefined || subtitle != null ? 
                <>
                    <div style={{display: "flex", padding: "5px", width: "100%", height:"auto", color: `${subtitleColor}`}}>
                        <b>{subtitle}</b>
                    </div>
                </> : 
                <></>
            }

            {subtitleOptional != undefined || subtitleOptional != null ? 
                <>
                    <div style={{display: "flex", padding: "5px", width: "100%", height:"auto", color: `${subtitleColor}`}}>
                        <b>{subtitleOptional}</b>
                    </div>
                </> : 
                <></>
            }
            
            <div style={{width: "100%", padding: "5px"}}>
                <CustomTopicText
                    $color="#fff"
                >
                    <CustomUnorderedList>
                        {atribuicoes.map((item, index) => (
                            <>
                                <li key={index}><CustomParagraph>{item}</CustomParagraph></li>
                            </>
                        ))}
                    </CustomUnorderedList>
                </CustomTopicText>
            </div>
        </CustomTopicContainer>
    )
}

export default InformationCard