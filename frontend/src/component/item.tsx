import * as React from "react";
import * as S from "./item.style.ts";

interface ItemProps {
	todos: { id: number; text: string }[];
	modifyId: number | null;
	update: string;
	setUpdate: React.Dispatch<React.SetStateAction<string>>;
	handleModify: (id: number, currentText: string) => void;
	handleCancel: () => void;
	handleUpdate: (id: number) => void;
	handleDelete: (id: number) => void;
	handleComplete: (id: number) => void;
}


export const Item: React.FC<ItemProps> = ({
	                                          todos,
	                                          modifyId,
	                                          update,
	                                          setUpdate,
	                                          handleModify,
	                                          handleCancel,
	                                          handleUpdate,
	                                          handleDelete,
	                                          handleComplete,
                                          }) => {
	if (todos.length === 0) {
		return <S.TodoText>할 일이 없습니다.</S.TodoText>;
	}
	return (
		<S.TodoContainer></S.TodoContainer>
	);
};

// 	return (
// 		<S.TodoList>
// 			{todos.map((todo) => (
// 				<S.TodoContainer key={todo.id}>
// 					{modifyId === todo.id ? (
// 						<Input
// 							placeholder={todo.text}
// 							value={update}
// 							onChange={(e) => setUpdate(e.target.value)}
// 						/>
// 					) : (
// 						<>
// 							<UnCheck onClick={() => handleComplete(todo.id)}/> {/* 완료 처리 클릭 시 handleComplete 호출 */}
// 							<S.TodoItem>{todo.text}</S.TodoItem>
// 						</>
// 					)}
//
// 					<S.ButtonGroup>
// 						{modifyId === todo.id ? (
// 							<>
// 								<Button text={"완료"} buttonColor="black" onClick={() => handleUpdate(todo.id)}/>
// 								<Button text={"취소"} onClick={handleCancel}/>
// 							</>
// 						) : (
// 							<>
// 								<Button text={"수정"} onClick={() => handleModify(todo.id, todo.text)}/>
// 								<Button text={"삭제"} onClick={() => handleDelete(todo.id)} buttonColor="red"/>
// 							</>
// 						)}
// 					</S.ButtonGroup>
// 				</S.TodoContainer>
// 			))}
// 		</S.TodoList>
// 	);
// };
