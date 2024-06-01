import { CustomDivImage, CustomImgAppear } from "./styles"
import imagem from "../../assets/animatedBanner.png";

const AnimationPhoto = () => {
    return (
        <CustomDivImage>
            <CustomImgAppear alt="logo" src={imagem} style={{"width": "auto", "height": "auto"}}/>
        </CustomDivImage>
    )
}

export default AnimationPhoto;