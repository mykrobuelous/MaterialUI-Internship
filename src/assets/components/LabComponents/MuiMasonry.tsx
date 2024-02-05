import { ExpandMore } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from "@mui/material";

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const MuiMasonry = () => {
	return (
		<>
			<Box sx={{ width: 500, minHeight: 400 }}>
				<Masonry columns={4} spacing={1}>
					{heights.map((height, index) => (
						<Paper
							key={index}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								height,
								border: "1px solid",
							}}
						>
							{index + 1}
						</Paper>
					))}
				</Masonry>
			</Box>
			<Box sx={{ width: 500, minHeight: 400 }}>
				<Masonry columns={4} spacing={1}>
					{heights.map((height, index) => (
						<Paper
							key={index}
							sx={{
								border: "1px solid",
							}}
						>
							<Accordion sx={{ minHeight: height }}>
								<AccordionSummary expandIcon={<ExpandMore />}>
									<Typography>Accordion {index + 1}</Typography>
								</AccordionSummary>
								<AccordionDetails>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum non maxime facere
									consectetur, commodi voluptatem suscipit soluta reprehenderit quae id!
								</AccordionDetails>
							</Accordion>
						</Paper>
					))}
				</Masonry>
			</Box>
		</>
	);
};

export default MuiMasonry;
