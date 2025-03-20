import React from "react";
import * as S from "./done.style.ts";
import { Button } from "./button";
import Check from "../assets/fillCheckField.svg?react";

interface DoneProps {
  done: { id: number; text: string }[];
  handleDeleteDone: (id: number) => void;
  handleUndo: (id: number) => void;
}

export const Done: React.FC<DoneProps> = ({
  done = [],
  handleDeleteDone,
  handleUndo,
}) => {
  return (
    <S.SectionTitle>
      DONE
      {done.length === 0 ? (
        <S.SectionText>완료 항목이 없습니다.</S.SectionText>
      ) : (
        done.map((todo) => (
          <S.TodoContainer key={todo.id}>
            <>
              <Check onClick={() => handleUndo(todo.id)} />

              <S.TodoItem>{todo.text}</S.TodoItem>
              <Button
                text={"삭제"}
                onClick={() => handleDeleteDone(todo.id)}
                buttonColor="red"
              />
            </>
          </S.TodoContainer>
        ))
      )}
    </S.SectionTitle>
  );
};
