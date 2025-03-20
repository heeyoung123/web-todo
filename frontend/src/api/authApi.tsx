import axiosInstance from "./axiosInstance";

export const loginUser = async (userId: string, password: string) => {
  try {
    const response = await axiosInstance.post("/users/login", {
      user_id: userId,
      password: password,
    });
    return response.data.token;
  } catch (error) {
    console.error("로그인 요청 에러:", error);
    throw error;
  }
};

export const registerUser = async (
  userId: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const response = await axiosInstance.post("/users/join", {
      user_id: userId,
      password: password,
      password_check: confirmPassword,
    });
    return response.data;
  } catch (error) {
    console.error("회원가입 요청 에러:", error);
    throw error;
  }
};
