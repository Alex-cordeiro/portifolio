import { useEffect, useState } from "react";
import { TextWriterProps } from "./interface";
import { StyledH1TypingEffect } from "../styled/styled";

const TextWriter = ({textList, delay, infinite} : TextWriterProps) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexArray, setCurrentIndexArray] = useState(0);
    
    const handleText = () => {
     
    }
    useEffect(() => {
        // handleText()

        let timeout;

        if((textList != undefined && textList.length > 0) && currentIndexArray < textList.length){
            setTimeout(() => {
                if(currentIndex < textList[currentIndexArray].length){
                    timeout = setTimeout(() => {
                        setCurrentText(prevText => prevText + textList[currentIndexArray][currentIndex]);
                        setCurrentIndex(prevIndex => prevIndex + 1);
                        console.log(currentIndex)
                    }, delay)
                }else {
                    setTimeout(() => {
                        setCurrentIndex(() => 0);
                        setCurrentText('');
                        setCurrentIndexArray(prevIndexArr => prevIndexArr + 1);
                    }, 1000)
                }
            }, 100)
        } else {
            setCurrentText('Terminou');
        }

        return clearTimeout(timeout);

    }, [currentIndex, delay, infinite, textList]);

    return (
        <StyledH1TypingEffect>
            {currentText ?? (<h1>Terminou...</h1>)}
        </StyledH1TypingEffect>
    );
}

export default TextWriter;