import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
	const [checked, setChecked] = useState<boolean>(false);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};
	console.log(checked);

	return (
		<Box>
			<FormControlLabel
				label="Dark Mode"
				control={<Switch checked={checked} onChange={handleChange} size="small" color="success" />}
			/>
		</Box>
	);
};

export default MuiSwitch;
