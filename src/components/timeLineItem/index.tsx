import { Popover } from "react-bootstrap";
import { ContainerItem } from "./styled"

interface ITimeLineItemProps {
    title: string;
    resume: string;
    logo?: string;
    year: number;
    sideAlign: string;
}

const 

TimeLineItem = ({title, resume, logo, year, sideAlign} : ITimeLineItemProps) => {
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
            {/* after */}
        </ContainerItem>   
    );
};

export default TimeLineItem;