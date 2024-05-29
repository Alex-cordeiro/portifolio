import {CustomDivStackContainer} from './styled';

interface StackContainerProps {
    imageName: string;
    imageAlt: string;
}

const StackContainer = ({ imageName, imageAlt }: StackContainerProps) => {
    return (
        <CustomDivStackContainer>
            <img src={"../../assets/logos/angular.svg"} alt={imageAlt} />
        </CustomDivStackContainer>
    )
}

export default StackContainer;