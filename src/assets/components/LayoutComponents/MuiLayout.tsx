import { Box, Divider, Stack, Grid, Paper } from "@mui/material";

const MuiLayout = () => {
	return (
		<Paper sx={{ padding: "32px" }} elevation={10}>
			<Stack
				sx={{ border: "1px solid" }}
				direction={"row"}
				spacing={2}
				divider={<Divider orientation="vertical" flexItem />}
			>
				<Box
					sx={{
						backgroundColor: "primary.main",
						color: "white",
						height: "100px",
						width: "100px",
						padding: "16px",
						cursor: "pointer",
						"&:hover": { backgroundColor: "primary.light" },
					}}
				>
					Layout
				</Box>
				<Box display="flex" height="100px" width="100px" bgcolor="success.light" p={2}></Box>
			</Stack>
			<Grid container px={2} my={2}>
				<Grid item xs={12} sm={6}>
					<Box bgcolor="primary.light">item 1</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box bgcolor="primary.light">item 2</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box bgcolor="primary.light">item 3</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box bgcolor="primary.light">item 4</Box>
				</Grid>
			</Grid>
			<Grid container px={2} rowSpacing={2} columnSpacing={1}>
				<Grid item xs={6}>
					<Box bgcolor="primary.light">item 1</Box>
				</Grid>
				<Grid item xs={6}>
					<Box bgcolor="primary.light">item 2</Box>
				</Grid>
				<Grid item xs={6}>
					<Box bgcolor="primary.light">item 3</Box>
				</Grid>
				<Grid item xs={6}>
					<Box bgcolor="primary.light">item 4</Box>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default MuiLayout;
