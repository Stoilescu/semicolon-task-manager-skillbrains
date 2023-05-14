import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
	DialogTitle,
	DialogContent,
	DialogActions,
	IconButton,
	Stack,
	MenuItem,
	Typography,
	Grid,
	Select,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "./../shared/button/Button";
import FormLabel from "./../shared/input/FormLabel";
import TextField from "./../shared/input/TextField";
import DatePicker from "./../shared/date-picker/DatePicker";
import { closeModal } from "../../store/slices/modal-slice";

const OPTIONS = [
	{ label: "Low", id: 1 },
	{ label: "Medium", id: 2 },
	{ label: "High", id: 3 },
];

function CreateTask() {
	const [select, setSelect] = useState("");
	const dispatch = useDispatch();
	const theme = useTheme();

	const handleChangeSelect = (event) => {
		setSelect(event.target.value);
	};
	return (
		<Stack
			sx={{
				[theme.breakpoints.up("lg")]: {
					width: "35vw",
				},
				[theme.breakpoints.up("md")]: {
					width: "50vw",
				},
				width: "65vw",
			}}
		>
			<Stack sx={{ width: "100%" }}>
				<DialogActions sx={{ paddingBottom: 0 }}>
					<IconButton
						onClick={() => dispatch(closeModal())}
						color="theme.text.primary"
					>
						<CloseIcon />
					</IconButton>
				</DialogActions>
				<DialogTitle sx={{ paddingTop: 0 }}>Create Task</DialogTitle>
				<DialogContent>
					<Stack gap={2}>
						<Stack gap={1}>
							<FormLabel>
								<Typography fontWeight="medium">Task Name</Typography>
							</FormLabel>
							<TextField required variant="outlined" />
						</Stack>
						<Stack direction={"row"}>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<Stack gap={1}>
										<FormLabel>
											<Typography fontWeight="medium">Task Priority</Typography>
										</FormLabel>
										<TextField
											value={select}
											onChange={handleChangeSelect}
											select
										>
											{OPTIONS.map((option) => (
												<MenuItem key={option.label} value={option.label}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
									</Stack>
								</Grid>
								<Grid item xs={6}>
									<Stack gap={1}>
										<FormLabel>
											<Typography fontWeight="medium">Due Date</Typography>
										</FormLabel>
										<LocalizationProvider dateAdapter={AdapterDayjs}>
											<DatePicker />
										</LocalizationProvider>
									</Stack>
								</Grid>
							</Grid>
						</Stack>
						<Stack gap={1}>
							<FormLabel>
								<Typography fontWeight="medium">Task Description</Typography>
							</FormLabel>
							<TextField
								required
								variant="outlined"
								placeholder="Type your content here...."
								multiline
								rows={3}
							/>
						</Stack>
						<Stack justifyContent="flex-start" alignItems="flex-start">
							<Button variant="contained" color="primary" size="large">
								Create Task
							</Button>
						</Stack>
					</Stack>
				</DialogContent>
			</Stack>
		</Stack>
	);
}

export default CreateTask;
