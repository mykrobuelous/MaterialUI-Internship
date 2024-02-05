import { Rating, Stack, Typography } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
	const [value, setValue] = useState<number | null>(null);
	const [value1, setValue1] = useState<number | null>(null);
	const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number | null) => {
		setValue(newValue);
	};
	const handleChange1 = (event: React.SyntheticEvent<Element, Event>, newValue: number | null) => {
		setValue1(newValue);
	};
	return (
		<Stack spacing={2}>
			<Rating
				value={value}
				onChange={handleChange}
				precision={0.5}
				size="large"
				icon={<FavoriteIcon fontSize="inherit" color="error" />}
				emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
			/>
			<Typography variant="h2">{value}</Typography>
			<Rating
				value={value}
				onChange={handleChange1}
				precision={0.5}
				size="large"
				icon={<FavoriteIcon fontSize="inherit" color="error" />}
				emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
				highlightSelectedOnly
			/>
			<Typography variant="h2">{value1}</Typography>
		</Stack>
	);
};

export default MuiRating;
