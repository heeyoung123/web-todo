import axiosInstance from "./axiosInstance";

export const fetchTodos = async () => {
  try {
    console.log("fetchTodos 함수 실행됨");
    const response = await axiosInstance.get("/todos", {
      withCredentials: true,
    });
    console.log("응답:", response);
    console.log("응답 데이터:", response.data);
    return response.data;
  } catch (error) {
    console.error("불러오기 실패:", error);
    throw error;
  }
};

export const addTodo = async (text: string) => {
  try {
    const response = await axiosInstance.post("/todos/", { text });
    return response.data;
  } catch (error) {
    console.error("할일 생서 실패:", error);
    throw error;
  }
};

export const updateTodo = async (id: number, newName: string) => {
  try {
    const response = await axiosInstance.put(`/todos/${id}`, { newName });
    return response.data;
  } catch (error) {
    console.error("업데이트 실패:", error);
    throw error;
  }
};

export const deleteTodo = async (id: number) => {
  try {
    await axiosInstance.delete(`/todos/${id}`);
    return id;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};

export const completeTodo = async (id: number) => {
  try {
    const response = await axiosInstance.put(`/todos/${id}`, { done: 1 });
    return response.data;
  } catch (error) {
    console.error("Error completing todo:", error);
    throw error;
  }
};

export const notCompleteTodo = async (id: number) => {
  try {
    const response = await axiosInstance.put(`/todos/${id}`, { done: 0 });
    return response.data;
  } catch (error) {
    console.error("Error notCompleting todo:", error);
    throw error;
  }
};
