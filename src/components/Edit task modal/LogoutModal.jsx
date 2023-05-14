import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modal-slice";
import {
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
} from "@mui/material";

function LogoutModal() {
	const dispatch = useDispatch();

	return (
		<>
			<DialogTitle>Are you sure you want to logout?</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Let Google help apps determine location. This means sending anonymous
					location data to Google, even when no apps are running.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					variant="contained"
					color="primary"
					onClick={() => dispatch(closeModal())}
				>
					Cancel
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => dispatch(closeModal())}
				>
					Logout
				</Button>
			</DialogActions>
		</>
	);
}

export default LogoutModal;
