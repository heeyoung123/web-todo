import styled from "styled-components";

export const SectionTitle = styled.div`
    color: #1E293B;
    font-family: Pretendard, sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 2.25rem */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
`;
export const SectionText = styled.div`
    color: #9CA3AF;
    text-align: center;
    font-family: Pretendard, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;`;

export const TodoItem = styled.div`

    display: flex;
    align-items: center;
    gap: 0.625rem;
    color: #0F172A;
    text-align: center;
    font-family: Pretendard, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    &:focus {
        border: 1px solid #0F172A;
        outline: none;
    }

`;


export const TodoContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem; /* 할 일과 버튼 사이 간격 */
    align-items: center`;
