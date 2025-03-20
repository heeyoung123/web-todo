import styled from "styled-components";

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;

`;
export const Line = styled.div`
    display: flex;
    width: 0.0625rem;
    flex-direction: column;
    align-items: flex-start;

    height: 100%;
    align-self: stretch;
    background: #E2E8F0;
`;
export const SideBar = styled.div`
    display: flex;
    width: 15rem;
    gap: 1.5rem;
    position: relative;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    align-items: center;
    border-radius: 0.25rem;
    background: #E2E8F0;
    height: 2.5rem;
    font-weight: 700;
    color: black;
`;
export const SidBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    align-self: stretch;`;
export const TodoWrapper = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-direction: column;

`;
export const TodoInput = styled.div`
    display: flex;
    gap: 1.25rem;
    flex-direction: row;
    margin-bottom: 1.25rem;

`;
