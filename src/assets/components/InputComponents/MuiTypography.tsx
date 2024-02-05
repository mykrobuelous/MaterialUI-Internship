import { Stack, Typography } from "@mui/material";

const MuiTypography = () => {
	return (
		<Stack>
			<Typography variant="h1">h1</Typography>

			<Typography variant="h2">h2</Typography>
			<Typography variant="h3">h3</Typography>
			<Typography variant="h4" component="h1" gutterBottom>
				h4
			</Typography>
			<Typography variant="h5">h5</Typography>
			<Typography variant="h6">h6</Typography>
			<Typography variant="subtitle1">subtitle1</Typography>
			<Typography variant="subtitle2">subtitle2</Typography>
			<Typography variant="body1">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, laborum!
			</Typography>
			<Typography variant="body2">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis hic quis exercitationem!
				Debitis, tempore assumenda! Reiciendis consequuntur libero officiis.
			</Typography>
		</Stack>
	);
};

export default MuiTypography;
