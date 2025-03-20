// import {useState} from "react";
//
// export const useTodoController = (initialTodos: { id: number; text: string }[], initialDones: {
// 	id: number;
// 	text: string
// }[]) => {
// 	const [todos, setTodos] = useState(initialTodos);
// 	const [dones, setDones] = useState(initialDones);
// 	const [modifyId, setModifyId] = useState<number | null>(null);
// 	const [update, setUpdate] = useState<string>("");
// 	const [cancel, setCancel] = useState<string>("");
//
// 	const handleModify = (id: number, currentText: string) => {
// 		setModifyId(id);
// 		setUpdate(currentText);
// 		setCancel(currentText);
// 	};
//
// 	const handleUpdate = (id: number) => {
// 		setModifyId(null);
// 		setTodos(todos.map((todo) => todo.id === id ? {...todo, text: update} : todo));
// 	};
//
// 	const handleCancel = () => {
// 		setModifyId(null);
// 		setUpdate(cancel);
// 	};
//
// 	const handleDelete = (id: number) => {
// 		setTodos(todos.filter((todo) => todo.id !== id));
// 	};
// 	const handlePost = (text: string) => {
// 		if (!text.trim()) return;
// 		const newTodo = {id: todos.length + 1, text};
// 		setTodos([...todos, newTodo]);
// 	};
//
// 	const handleComplete = (id: number) => {
// 		const completedTodo = todos.find(todo => todo.id === id);
// 		if (!completedTodo) return;
//
// 		setTodos(todos.filter(todo => todo.id !== id));
// 		setDones([...dones, completedTodo]);
// 	};
//
// 	const handleDeleteDone = (id: number) => {
// 		setDones(dones.filter((done) => done.id != id));
// 	};
//
// 	return {
// 		todos,
// 		modifyId,
// 		update,
// 		dones,
// 		setUpdate,
// 		handleModify,
// 		handleUpdate,
// 		handleCancel,
// 		handleDelete,
// 		handlePost,
// 		handleComplete,
// 		handleDeleteDone,
// 	};
// };


//api
import {useEffect, useState} from "react";
import {addTodo, completeTodo, deleteTodo, fetchTodos, updateTodo} from "../api/todoApi";

export const useTodoController = () => {
	const [todos, setTodos] = useState<{ id: number; text: string; done: boolean }[]>([]);
	const [done, setDone] = useState<{ id: number; text: string }[]>([]);
	const [modifyId, setModifyId] = useState<number | null>(null);
	const [update, setUpdate] = useState<string>("");


	useEffect(() => {
		const loadTodos = async () => {
			try {
				const data = await fetchTodos();
				console.log("Todos loaded:", data);  // 응답 데이터 확인
				setTodos(data);
			} catch (error) {
				console.error("Error loading todos:", error);
			}
		};
		loadTodos();
	}, []);
	const handleModify = (id: number, currentText: string) => {
		setModifyId(id);
		setUpdate(currentText);
	};

	const handleUpdate = async (id: number) => {
		try {
			await updateTodo(id, update);
			setTodos(todos.map((todo) => todo.id === id ? {...todo, text: update} : todo));
			setModifyId(null);
		} catch (error) {
			console.error("Error updating todo:", error);
		}
	};

	const handleCancel = () => {
		setModifyId(null);
		setUpdate("");
	};

	const handleDelete = async (id: number) => {
		try {
			await deleteTodo(id);
			setTodos(todos.filter((todo) => todo.id !== id));
			setDone(done.filter((todo) => todo.id !== id)); // 삭제 시 done 배열에서도 제거
		} catch (error) {
			console.error("Error deleting todo:", error);
		}
	};

	const handlePost = async (text: string) => {
		if (!text.trim()) return;
		try {
			const newTodo = await addTodo(text);
			setTodos([...todos, newTodo]);
		} catch (error) {
			console.error("Error adding todo:", error);
		}
	};

	const handleComplete = async (id: number) => {
		try {
			await completeTodo(id);
			setTodos(todos.map((todo) => todo.id === id ? {...todo, done: true} : todo));
			setDone([...done, {id, text: todos.find((todo) => todo.id === id)?.text || ""}]); // 완료된 todo를 done 배열에 추가
		} catch (error) {
			console.error("Error completing todo:", error);
		}
	};

	const handleDeleteDone = (id: number) => {
		setDone(done.filter((todo) => todo.id !== id)); // done에서 삭제
	};

	return {
		todos,
		done, // done 상태 반환
		modifyId,
		update,
		setUpdate,
		handleModify,
		handleUpdate,
		handleCancel,
		handleDelete,
		handlePost,
		handleComplete,
		handleDeleteDone,
	};
};


// useEffect(() => {
// 	const loadTodos = async () => {
// 		try {
// 			const data = await fetchTodos();
// 			setTodos(data);
// 			// setDone(data.filter((todo: { done: boolean; }) => todo.done));
// 		} catch (error) {
// 			console.error("Error loading todos:", error);
// 		}
// 	};
// 	loadTodos();
// }, []);