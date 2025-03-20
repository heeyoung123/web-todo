import React from "react";
import * as S from "./done.style.ts";
import {Button} from "./button";
import Check from "../assets/fillCheckField.svg";

interface DoneProps {
	done: { id: number; name: string }[];
	handleDeleteDone: (id: number) => void;
}

export const Done: React.FC<DoneProps> = ({done = [], handleDeleteDone}) => {
	return (
		<S.SectionTitle>
			DONE
			{done.length === 0 ? (
				<S.SectionText>완료 항목이 없습니다.</S.SectionText>
			) : (
				done.map((done) => (
					<S.TodoContainer key={done.id}>
						<>
							<Check/>
							<S.TodoItem>{done.name}</S.TodoItem>
							<Button text={"삭제"} onClick={() => handleDeleteDone(done.id)} buttonColor="red"/>
						</>
					</S.TodoContainer>
				))
			)}
		</S.SectionTitle>
	);
};
