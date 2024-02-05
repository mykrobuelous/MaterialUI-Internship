import { Link, Stack, Typography } from "@mui/material";

const MuiLink = () => {
	return (
		<Stack spacing={2} direction="row" p={4}>
			<Link href="#">Link</Link>
			<Link href="#" color="secondary" underline="hover">
				Link
			</Link>
			<Typography variant="h1">
				<Link href="#" color="secondary" underline="none">
					Link
				</Link>
			</Typography>
		</Stack>
	);
};

export default MuiLink;
