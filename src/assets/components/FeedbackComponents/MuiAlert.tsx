import { Check } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";

const MuiAlert = () => {
	return (
		<Stack spacing={2}>
			<Alert severity="error">Error</Alert>
			<Alert severity="warning">Warning</Alert>
			<Alert severity="info">Info</Alert>
			<Alert severity="success">Sucess</Alert>

			<Alert severity="error" variant="outlined">
				Error
			</Alert>
			<Alert severity="warning" variant="outlined">
				Warning
			</Alert>
			<Alert severity="info" variant="outlined">
				Info
			</Alert>
			<Alert severity="success" variant="outlined">
				Sucess
			</Alert>
			<Alert severity="error" variant="filled" onClose={() => alert("Closed")}>
				<AlertTitle>Error</AlertTitle>
				Error
			</Alert>
			<Alert severity="warning" variant="filled">
				<AlertTitle>Warning</AlertTitle>
				Warning
			</Alert>
			<Alert
				severity="info"
				variant="filled"
				action={
					<Button color="inherit" size="small">
						Undo
					</Button>
				}
			>
				<AlertTitle>Info</AlertTitle>
				Info
			</Alert>
			<Alert severity="success" variant="filled" icon={<Check />}>
				<AlertTitle>Success</AlertTitle>
				Sucess
			</Alert>
		</Stack>
	);
};

export default MuiAlert;
