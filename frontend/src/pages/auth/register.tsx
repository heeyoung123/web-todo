// import {Button} from "../../component/button.tsx";
// import {AuthContainer} from "../../shared/container.ts";
// import {LoginText} from "./auth.style.ts"
// import {Input} from "../../component/input.tsx";
//
// const Register = () => {
//     return (
//         <AuthContainer>
//             <LoginText>회원가입</LoginText>
//             <Input placeholder={"아이디를 입력해주세요"} width={"22.5rem"}/>
//             <Input placeholder={"비밀번호를 입력해주세요"} width={"22.5rem"}/>
//             <Input placeholder={"비밀번호를 다시 입력해주세요"} width={"22.5rem"}/>
//
//             <Button text="회원가입" buttonColor="black" width={"22.5rem"} onClick={() => console.log("Canceled!")}
//             />
//         </AuthContainer>
//     )
// }
// export default Register;


import {Button} from "../../component/button.tsx";
import {AuthContainer} from "../../shared/container.ts";
import {LoginText} from "./auth.style.ts";
import {Input} from "../../component/input.tsx";
import {useState} from "react";
import {registerUser} from "../../api/authApi";
import {useNavigate} from "react-router-dom";

const Register = () => {
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const nav = useNavigate();

	const handleRegister = async () => {
		// const {userId, password, confirmPassword} = values;
		if (password !== confirmPassword) {
			alert("비밀번호가 일치하지 않습니다.");
			return;
		}

		try {
			await registerUser(userId, password, confirmPassword);
			nav("/login");
		} catch (error) {
			console.error("회원가입 에러:", error);
		}
	};

	return (
		<AuthContainer>
			<LoginText>회원가입</LoginText>

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
			<Input
				placeholder="비밀번호를 다시 입력해주세요"
				width="22.5rem"
				type="password"
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
			/>
			<Button text="회원가입" buttonColor="black" width="22.5rem" onClick={handleRegister}/>
		</AuthContainer>
	);
};

export default Register;