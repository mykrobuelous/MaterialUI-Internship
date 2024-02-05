import { Box } from "@mui/material";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => {
	return { height: "250px", width: "250px", backgroundColor: theme.palette.neutral?.darker };
});

const MuiResponsiveness = () => {
	return (
		<>
			<Box
				sx={{
					height: "300px",
					width: {
						xs: 100, //0
						sm: 200, // 600
						md: 300, // 900
						lg: 400, //1200
						xl: 500, //1536
					},
					bgcolor: "secondary.dark",
				}}
			>
				MuiResponsiveness
			</Box>
			<StyledBox />
		</>
	);
};

export default MuiResponsiveness;
