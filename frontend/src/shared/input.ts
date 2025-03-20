import styled from "styled-components";

export const InputContainer = styled.input`
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
    align-self: stretch;
    border-radius: 0.25rem;
    border: 1px solid #D4D4D8;
    width: ${({width}) => width || 'auto'};
`