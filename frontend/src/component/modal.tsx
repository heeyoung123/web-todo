import * as S from "./modal.style";
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import Trash from "../assets/trash.svg?react";

interface ModalProps {
  closeModal: () => void;
  teamName: string;
  setTeamName: (value: string) => void;
  handleCreateTeam: () => void;
}

export const CreateTeamModal = ({
  closeModal,
  teamName,
  setTeamName,
  handleCreateTeam,
}: ModalProps) => {
  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.ModalTitle>팀 만들기</S.ModalTitle>
        <Input
          placeholder={"팀 이름을 입력해주세요"}
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <S.ButtonGroup>
          <Button
            text={"만들기"}
            onClick={handleCreateTeam}
            buttonColor="black"
          />
          <Button text={"취소"} onClick={closeModal} />
        </S.ButtonGroup>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

interface OptionTeamModalProps {
  closeModal: () => void;
  handleDeleteTeam: () => void;
  handleOpenInviteModal: () => void;
}

export const OptionTeamModal = ({
  closeModal,
  handleDeleteTeam,
  handleOpenInviteModal,
}: OptionTeamModalProps) => {
  return (
    <S.OptionModalContainer>
      <S.OptionList
        onClick={() => {
          handleOpenInviteModal();
          closeModal();
        }}
      >
        초대하기
      </S.OptionList>
      <S.OptionList
        onClick={() => {
          handleDeleteTeam();
          closeModal();
        }}
      >
        삭제하기
      </S.OptionList>
    </S.OptionModalContainer>
  );
};

interface InviteModalProps {
  closeModal: () => void;
  handleAddMember: (member: string) => void;
  member: string;
  setMember: (value: string) => void;
}

export const InviteModal = ({
  closeModal,
  handleAddMember,
  member,
  setMember,
}: InviteModalProps) => {
  const [invitedMembers, setInvitedMembers] = useState<string[]>([]);

  const handleAddAndUpdate = () => {
    if (!member.trim()) return;
    handleAddMember(member);
    setInvitedMembers((prev) => [...prev, member]);
    setMember("");
  };

  return (
    <S.ModalContainer>
      <S.InviteContent invitedMembersCount={invitedMembers.length}>
        <S.ModalTitle>팀원 초대하기</S.ModalTitle>

        <S.InviteInput>
          <Input
            placeholder="초대할 팀원의 아이디를 입력해주세요"
            value={member}
            fonttype="small"
            onChange={(e) => setMember(e.target.value)}
          />
          <Button
            text="초대"
            onClick={handleAddAndUpdate}
            buttonColor="black"
          />
        </S.InviteInput>

        <S.InvitedMembersList>
          {invitedMembers.map((invitedMember, index) => (
            <S.InvitedMember key={index}>
              {invitedMember}
              <Trash />
            </S.InvitedMember>
          ))}
        </S.InvitedMembersList>
        <S.ButtonGroup>
          <Button text="취소" onClick={closeModal} />
        </S.ButtonGroup>
      </S.InviteContent>
    </S.ModalContainer>
  );
};
