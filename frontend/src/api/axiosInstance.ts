// import axios from "axios";
//
// const axiosInstance = axios.create({
// 		baseURL: "https://31a7-210-99-254-45.ngrok-free.app/",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 	},
// );
//
// export default axiosInstance;
import axios from "axios";

const axiosInstance = axios.create({
	// baseURL: "https://4263-210-99-254-45.ngrok-free.app/",
	baseURL: "http://localhost:3333/",
	headers: {
		"Content-Type": "application/json", // 기본적으로 설정
	},
	withCredentials: true,
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use((config) => {
	if (config.method === "get") {
		// GET 요청일 경우 Content-Type 제거
		delete config.headers["Content-Type"];
	}
	return config;
});

export default axiosInstance;