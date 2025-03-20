import styled from "styled-components";

export const ButtonGroup = styled.div`
    display: flex;
    gap: 0.25rem;
`;

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
export const TodoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-bottom: 2rem;

`;
export const TodoText = styled.div`
    color: #9CA3AF;
    text-align: center;
    font-family: Pretendard, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    margin-bottom: 2.5rem;`;

export const TodoContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem; /* 할 일과 버튼 사이 간격 */
    align-items: center`;
