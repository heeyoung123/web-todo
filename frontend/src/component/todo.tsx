import * as S from "./todo.style.ts";
import {Item} from "./item.tsx";
import React from "react";


interface TodoProps {
	todos: { id: number; text: string }[];
	modifyId: number | null;
	update: string;
	setUpdate: React.Dispatch<React.SetStateAction<string>>;
	handleModify: (id: number, currentText: string) => void;
	handleUpdate: (id: number) => void;
	handleCancel: () => void;
	handleDelete: (id: number) => void;
	handleComplete: (id: number) => void;
}


export const Todo = ({
	                     todos,
	                     modifyId,
	                     update,
	                     setUpdate,
	                     handleModify,
	                     handleUpdate,
	                     handleCancel,
	                     handleDelete,
	                     handleComplete,
                     }: TodoProps) => {
	return (
		<>
			<S.SectionTitle>
				TO DO
				<Item
					todos={todos}
					modifyId={modifyId}
					update={update}
					setUpdate={setUpdate}
					handleModify={handleModify}
					handleUpdate={handleUpdate}
					handleCancel={handleCancel}
					handleDelete={handleDelete}
					handleComplete={handleComplete}
				/>
			</S.SectionTitle>

		</>
	);
};