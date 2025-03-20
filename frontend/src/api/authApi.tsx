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

export const registerUser = async (userId: string, password: string, confirmPassword: string) => {
	try {
		const response = await axiosInstance.post("/users/join", {
			user_id: userId,
			password: password,
			password_check: confirmPassword,
		});
		return response.data; // 회원가입 성공 데이터 반환
	} catch (error) {
		console.error("회원가입 요청 에러:", error);
		throw error;
	}
};


// 회원가입

//
// const SignupForm: React.FC<any> = ({ setIsLogin }) => {
// 	const handleSignup = async (values: any) => {
// 		const { email, password, confirmPassword, agreed } = values;
// 		try {
// 			// TODO: 데이터베이스에서 email과 password 기반으로 찾아서 이미 존재하는지 확인 후, 존재하는 경우
// 			const response = await axios.get(
// 				`http://localhost:4000/users?email=${email}`
// 			);
//
// 			console.log("response", response.data);
//
// 			if (response.data.length >= 1) {
// 				alert("이미 존재하는 아이디입니다.");
// 				return false;
// 			}
//
// 			// 회원가입 기능
// 			await axios.post("http://localhost:4000/users", {
// 				email: email,
// 				password: password,
// 			});
// 			// TODO 성공
// 			alert(
// 				"회원가입이 성공적으로 처리되었습니다. 로그인 페이지로 이동합니다."
// 			);
//
// 			setIsLogin(true);
// 		} catch (error) {
// 			// TODO: 네트워크 등 기타 문제인 경우
// 			return false;
// 		}
// 	};
//
// 	return (
// 		<FormWrapper onFinish={handleSignup}>
// 			<Form.Item
// 				label="이메일"
// 				name="email"
// 				rules={[{ required: true, message: "이메일을 입력해주세요." }]}
// 			>
// 				<Input />
// 			</Form.Item>
// 			<Form.Item
// 				label="비밀번호"
// 				name="password"
// 				rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
// 			>
// 				<Input.Password />
// 			</Form.Item>
// 			<Form.Item
// 				label="비밀번호 확인"
// 				name="confirmPassword"
// 				rules={[
// 					{ required: true, message: "비밀번호 확인을 입력해주세요." },
// 					({ getFieldValue }) => ({
// 						validator(_, value) {
// 							if (!value || getFieldValue("password") === value) {
// 								return Promise.resolve();
// 							}
// 							return Promise.reject(new Error("비밀번호가 일치하지 않습니다."));
// 						},
// 					}),
// 				]}
// 			>
// 				<Input.Password />
// 			</Form.Item>
// 			<Form.Item
// 				name="agreed"
// 				valuePropName="checked"
// 				rules={[
// 					{
// 						validator: (_, value) =>
// 							value
// 								? Promise.resolve()
// 								: Promise.reject(
// 									new Error("고객정보 이용동의에 체크해주세요.")
// 								),
// 					},
// 				]}
// 			>
// 				<Checkbox>고객정보 이용동의</Checkbox>
// 			</Form.Item>
// 			<Form.Item>
// 				<Button type="primary" htmlType="submit">
// 					회원가입
// 				</Button>
// 			</Form.Item>
// 		</FormWrapper>
// 	);
// };
//
// export default SignupForm;