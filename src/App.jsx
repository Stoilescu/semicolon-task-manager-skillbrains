import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Test from "./pages/TestPage";
import TasksPage from "./pages/TasksPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import LoginPage from "./pages/LoginPage";
import WorkspacePage from "./pages/WorkspacePage";
import AuthenticationPage from "./pages/AuthenticationPage";
import PrivatePage from "./pages/PrivatePage";
import { login } from "./store/slices/authentication-slice";
import { useDispatch, useSelector } from "react-redux";
import { selectModal, closeModal } from "./store/slices/modal-slice";
import RoutePaths from "./constants/route-paths";
import { Dialog } from "@mui/material";
import ModalTypes from "./constants/modal-types";
import TestContent1 from "./components/modal-content/TestContent1";
import TestContent2 from "./components/modal-content/TestContent2";
import Layout from "./components/Layout";

function App() {
	const dispatch = useDispatch();
	const modalState = useSelector(selectModal);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			dispatch(login());
		}
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={RoutePaths.ROOT} element={<TasksPage />} />
					<Route path={RoutePaths.TEST} element={<Test />} />
					<Route path={RoutePaths.LOGIN} element={<LoginPage />} />
					<Route path={RoutePaths.SIGNUP} element={<SignUpPage />} />
					<Route
						path={RoutePaths.FORGOT_PASSWORD}
						element={<ForgotPasswordPage />}
					/>
					<Route
						path={RoutePaths.CHANGE_PASSWORD}
						element={<ChangePasswordPage />}
					/>
					<Route path={RoutePaths.WORKSPACE} element={<WorkspacePage />} />
					<Route path={RoutePaths.AUTH} element={<AuthenticationPage />} />

					<Route
						path={RoutePaths.PRIVATE}
						element={
							<Layout>
								<PrivatePage />
							</Layout>
						}
					/>
				</Routes>
			</BrowserRouter>

			<Dialog open={modalState ?? false} onClose={() => dispatch(closeModal())}>
				{modalState === ModalTypes.TEST && <TestContent1 />}
				{modalState === ModalTypes.TEST2 && <TestContent2 />}
			</Dialog>
		</>
	);
}

export default App;
