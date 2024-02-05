import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
	const [country, setCountry] = useState<string>("IN");
	const [countries, setCountries] = useState<string[]>([]);
	const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCountry(event.target.value);
	};
	const handleMultipleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setCountries(typeof value === "string" ? value.split(",") : value);
	};
	return (
		<Box width="250px">
			<TextField label="Select Country" select value={country} onChange={handleSelectChange} fullWidth>
				<MenuItem value="IN">India</MenuItem>
				<MenuItem value="US">USA</MenuItem>
				<MenuItem value="AU">Australia</MenuItem>
			</TextField>
			<TextField
				label="Select Country"
				select
				value={countries}
				onChange={handleMultipleChange}
				fullWidth
				SelectProps={{ multiple: true }}
				size="medium"
				color="success"
				helperText="Please select a country"
				error
			>
				<MenuItem value="IN">India</MenuItem>
				<MenuItem value="US">USA</MenuItem>
				<MenuItem value="AU">Australia</MenuItem>
			</TextField>
		</Box>
	);
};

export default MuiSelect;
