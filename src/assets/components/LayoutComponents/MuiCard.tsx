import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const MuiCard = () => {
	return (
		<Box width="300px">
			<Card>
				<CardMedia
					component="img"
					height="140"
					image="https://source.unsplash.com/random"
					alt="Unsplash Image"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						React
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam provident, sapiente dicta
						culpa animi corrupti tempora obcaecati expedita, nobis, iusto et. Ratione porro ad repellendus
						sunt, amet rem et. Modi eos harum accusamus hic explicabo.
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

export default MuiCard;
