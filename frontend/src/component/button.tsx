import {buttonType} from "./button.style.ts";
import * as React from "react";

interface ButtonProps {
    text: string,
    onClick: () => void,
    width?: string,
    buttonColor?: keyof typeof buttonType,
    height?: string
}


export const Button: React.FC<ButtonProps> = ({text, onClick, buttonColor = "white", width, height}) => {
    const ButtonComponent = buttonType[buttonColor];
    return <ButtonComponent onClick={onClick} width={width} height={height}>{text}</ButtonComponent>;
};
