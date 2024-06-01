import { ContainerItem } from "./styled"

interface ITimeLineItemProps {
    title: string;
    resume: string;
    logo?: string;
    year: number;
    sideAlign: string;
}

const 

TimeLineItem = ({title, resume, year, sideAlign} : ITimeLineItemProps) => {
    return (

        <ContainerItem
            $sideAlign={sideAlign}
        >
            <div>
                <h1>{title} - {year}</h1> <br/>
                <p>
                    {resume}
                </p>
            </div>
        </ContainerItem>   
    );
};

export default TimeLineItem;