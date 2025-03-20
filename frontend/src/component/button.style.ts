import styled from "styled-components";

export const BaseButton = styled.button<{
  bgColor?: string;
  textColor?: string;
  width?: string;
  height?: string;
}>`
  display: inline-flex;
  cursor: pointer;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-style: normal;
  border-radius: 0.25rem;
  line-height: 24px;
  min-width: max-content;
  width: ${({ width }) => width || "auto"};
  height: ${({ height: height }) => height || "2.5rem"};
  border: 1px solid ${({ bgColor }) => bgColor || "#94A3B8"};
  background: ${({ bgColor }) => bgColor || "transparent"};
  color: ${({ textColor }) => textColor || "#000"};
`;

export const buttonType = {
  white: styled(BaseButton)`
    border-radius: 0.25rem;
    border: 1px solid #94a3b8;
  `,
  black: styled(BaseButton)`
    border-radius: 0.25rem;
    background: #0f172a;
    color: white;
  `,
  red: styled(BaseButton)`
    border-radius: 0.25rem;
    border: 1px solid #ef4444;
    color: #ef4444;
  `,
};
