import { useEffect, useState } from "react";
import {
  addTodo,
  completeTodo,
  deleteTodo,
  fetchTodos,
  updateTodo,
  notCompleteTodo,
} from "../api/todoApi";

export const useTodoController = () => {
  const [todos, setTodos] = useState<
    { id: number; text: string; done: number }[]
  >([]);
  const [done, setDone] = useState<
    { id: number; text: string; done: number }[]
  >([]);
  const [modifyId, setModifyId] = useState<number | null>(null);
  const [update, setUpdate] = useState<string>("");

  const loadTodos = async () => {
    try {
      const data = await fetchTodos();
      const activeTodos = data.filter(
        (todos: { done: number }) => todos.done === 0
      );
      const completedTodos = data.filter(
        (todos: { done: number }) => todos.done === 1
      );

      setTodos(activeTodos);
      setDone(completedTodos);
    } catch (error) {
      console.error("Error loading todos:", error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);
  const handleModify = (id: number, currentText: string) => {
    setModifyId(id);
    setUpdate(currentText);
  };

  const handleUpdate = async (id: number) => {
    try {
      await updateTodo(id, update);
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, text: update } : todo))
      );
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
      setDone(done.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handlePost = async (text: string) => {
    if (!text.trim()) return;
    try {
      const newTodo = await addTodo(text);
      setTodos([...todos, newTodo]);
      loadTodos();
    } catch (error) {
      console.error("등록 실패:", error);
    }
  };

  const handleUndo = async (id: number) => {
    try {
      await notCompleteTodo(id);
      const undoneTodo = done.find((todo) => todo.id === id);
      if (!undoneTodo) return;

      setDone(done.filter((todo) => todo.id !== id));
      setTodos([...todos, { ...undoneTodo, done: 0 }]);
    } catch (error) {
      console.error("완료 취소 실패 :", error);
    }
  };

  const handleComplete = async (id: number) => {
    try {
      await completeTodo(id);
      const completedTodo = todos.find((todo) => todo.id === id);
      if (!completedTodo) return;

      setTodos(todos.filter((todo) => todo.id !== id));
      setDone([...done, { ...completedTodo, done: 1 }]);
    } catch (error) {
      console.error("완료 실패", error);
    }
  };

  const handleDeleteDone = (id: number) => {
    setDone(done.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    done,
    modifyId,
    update,
    setUpdate,
    handleModify,
    handleUpdate,
    handleCancel,
    handleDelete,
    handlePost,
    handleUndo,
    handleComplete,
    handleDeleteDone,
  };
};
