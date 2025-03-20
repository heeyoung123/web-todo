import * as React from "react"; // 스타일 파일
import * as S from "./input.style.ts";

interface InputProps {
	placeholder?: string,
	width?: string,
	borderType?: "white" | "black" | "red",
	value?: string,
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
	fonttype?: "small" | "normal",
	type?: string
}

export const Input: React.FC<InputProps> = ({
	                                            placeholder,
	                                            width,
	                                            borderType = "white",
	                                            value,
	                                            onChange,
	                                            fonttype = "normal",
	                                            type,
                                            }) => {
	return <S.Input placeholder={placeholder} width={width} borderType={borderType} value={value} onChange={onChange}
	                fonttype={fonttype} type={type}/>;
};