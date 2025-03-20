// import {URL} from "../constant/url.ts";
// import {createBrowserRouter} from "react-router-dom";
// import {lazy, Suspense} from "react";
//
// const Home = lazy(() => import("../pages/home/home.tsx"));
// const Login = lazy(() => import("../pages/auth/login.tsx"));
// const Register = lazy(() => import("../pages/auth/register.tsx"));
// const App = lazy(() => import("../App"));
// const router = createBrowserRouter([
// 		{
// 			path: URL.home,
// 			element: (<Suspense fallback={<div>로딩중..</div>}><App/></Suspense>),
// 			children: [
// 				{
// 					index: true,
// 					element: <Home/>,
// 				},
//
// 				{
// 					path: URL.login,
// 					element: <Login/>,
// 				},
// 				{
// 					path: URL.register,
// 					element: <Register/>,
// 				},
// 			],
// 		},
// 	],
// );
//
//
// export default router;
import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import {URL} from "../constant/url.ts";


const Home = lazy(() => import("../pages/home/home.tsx"));
const Login = lazy(() => import("../pages/auth/login.tsx"));
const Register = lazy(() => import("../pages/auth/register.tsx"));
const App = lazy(() => import("../App"));
const router = createBrowserRouter([
	{
		path: URL.home,
		element: (
			<Suspense fallback={<div>로딩중..</div>}>
				<App/>
			</Suspense>
		),
		children: [

			{
				index: true,
				element: <Login/>,
			},
			{
				path: URL.login,
				element: <Login/>,
			},
			{
				path: URL.register,
				element: <Register/>,
			},
			{
				path: URL.todos,  // 홈 페이지
				element: <Home/>,
			},
		],
	},
]);

export default router;