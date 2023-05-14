import React from "react";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modal-slice";
import {
	DialogTitle,
	DialogContent,
	Button,
	DialogActions,
	IconButton,
	DialogContentText,
} from "@mui/material";

function DeleteTaskModalContent() {
	const dispatch = useDispatch();

	return (
		<Stack>
			<DialogActions sx={{ paddingBottom: 0 }}>
				<IconButton
					onClick={() => dispatch(closeModal())}
					color="theme.text.primary"
				>
					<CloseIcon />
				</IconButton>
			</DialogActions>
			<DialogTitle sx={{ paddingTop: 0 }}>Delete Task</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Are you sure you delete the task? This task is in-progress?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					variant="contained"
					color="primary"
					onClick={() => dispatch(closeModal())}
				>
					Yes
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => dispatch(closeModal())}
				>
					No
				</Button>
			</DialogActions>
		</Stack>
	);
}
export default DeleteTaskModalContent;
