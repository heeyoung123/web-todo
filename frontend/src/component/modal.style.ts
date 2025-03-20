import styled from "styled-components";

export const ModalContent = styled.div`
    width: 22.5rem;
    height: 13.25rem;
    background: white;
    display: flex;
    border-radius: 0.5rem;
    padding: 1.5rem 1.25rem;
    flex-direction: column;

    flex-shrink: 0;
`;
export const OptionModalContainer = styled.div`
    display: flex;
    position: absolute;
    padding: 0.75rem 4.4375rem 0.75rem 0.75rem;
    align-items: center;
    width: 9.6875rem;
    height: 5.375rem;
    flex-direction: column;
    justify-content: center;
    top: 80%;
    left: 30%;
    border-radius: 0.25rem;
    border: 1px solid #000;
    background: white;
    z-index: 1;
`;


export const OptionList = styled.div`
    display: flex;
    padding: 0.25rem 0;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    color: #0F172A;
    text-align: center;
    font-family: Pretendard, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;


export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalTitle = styled.div`
    color: #0F172A;
    font-family: Pretendard, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
    line-height: 150%;
`;

export const InviteContent = styled.div<{ invitedMembersCount: number }>`
    height: ${({invitedMembersCount}) => 13.25 + invitedMembersCount * 3}rem;
    width: 22.5rem;
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 1.5rem 1.25rem;
    flex-shrink: 0;

`;

export const InviteInput = styled.div`
    display: flex;
    gap: 1.25rem;
    flex-direction: row;
`;

export const InvitedMembersList = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const InvitedMember = styled.div`

    gap: 0.5rem;
    border-radius: 0.25rem;


    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 0.26rem;
    justify-content: flex-end;
    margin-top: 2.5rem;
`;
