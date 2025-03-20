import styled from "styled-components";

const FOCUS_BORDER_COLORS = {
  white: "#94A3B8",
  black: "#1E293B",
  red: "#DC2626",
};

const FONT_SIZE = {
  small: "0,875rem",
  normal: "1rem",
};
export const Input = styled.input<{
  fonttype?: keyof typeof FONT_SIZE;
  borderType?: keyof typeof FOCUS_BORDER_COLORS;
}>`
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  border: 1px solid #d4d4d8;
  border-radius: 0.25rem;
  height: 2.5rem;

  /* placeholder 스타일 */

  ::placeholder {
    color: #6b7280;
    font-family: Pretendard, sans-serif;
    font-size: ${({ fonttype }) =>
      FONT_SIZE[fonttype || "normal"]}; /* small prop에 따라 글씨 크기 조정 */
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
  }

  /* focus 시 border-color 변경 */

  &:focus {
    border-color: ${({ borderType }) =>
      FOCUS_BORDER_COLORS[borderType || "white"]};
    outline: none;
  }

  /* width 설정 */
  width: ${({ width }) => width || "100%"};
`;
