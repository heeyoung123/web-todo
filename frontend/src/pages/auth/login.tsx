// import {Button} from "../../component/button.tsx";
// import {AuthContainer} from "../../shared/container.ts";
// import {LoginText} from "./auth.style.ts"
// import {Input} from "../../component/input.tsx";
// import {useNavigate} from "react-router-dom";
//
// const Login = () => {
//     const nav = useNavigate();
//     return (
//         <AuthContainer>
//             <LoginText>로그인</LoginText>
//             <Input placeholder={"아이디를 입력해주세요"} width={"22.5rem"}/>
//             <Input placeholder={"비밀번호를 입력해주세요"} width={"22.5rem"}/>
//             <Button text="로그인" buttonColor="black" width={"22.5rem"} onClick={() => console.log("Canceled!")}
//             />
//             <Button text="회원가입" width={"22.5rem"} onClick={() => nav('/register')}
//             />
//         </AuthContainer>
//     )
// }
// export default Login;

// src/pages/Login.tsx

import {Button} from "../../component/button.tsx";
import {AuthContainer} from "../../shared/container.ts";
import {LoginText} from "./auth.style.ts";
import {Input} from "../../component/input.tsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {loginUser} from "../../api/authApi";

const Login = () => {
	const nav = useNavigate();
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		try {
			const token = await loginUser(userId, password);
			sessionStorage.setItem("jwtToken", token);
			nav("/todos");
		} catch (error) {
			console.error("로그인 에러:", error);
		}
	};

	return (
		<AuthContainer>
			<LoginText>로그인</LoginText>
			<Input
				placeholder="아이디를 입력해주세요"
				width="22.5rem"
				value={userId}
				onChange={(e) => setUserId(e.target.value)}
			/>
			<Input
				placeholder="비밀번호를 입력해주세요"
				width="22.5rem"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button text="로그인" buttonColor="black" width="22.5rem" onClick={handleLogin}/>
			<Button text="회원가입" width="22.5rem" onClick={() => nav("/register")}/>
		</AuthContainer>
	);
};

export default Login;