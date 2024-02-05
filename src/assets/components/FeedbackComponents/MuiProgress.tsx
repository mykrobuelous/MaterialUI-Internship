import { CircularProgress, LinearProgress, Stack } from "@mui/material";

const MuiProgress = () => {
	return (
		<Stack spacing={2}>
			<CircularProgress />
			<CircularProgress variant="determinate" value={60} />
			<CircularProgress color="success" />
			<LinearProgress />
			<LinearProgress variant="determinate" value={60} />
			<LinearProgress color="success" />
		</Stack>
	);
};

export default MuiProgress;
