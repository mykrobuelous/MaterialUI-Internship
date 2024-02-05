import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";

const MuiBottomNavigation = () => {
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<BottomNavigation sx={{ width: "100%", position: "absolute", bottom: 0 }} value={value} onChange={handleChange}>
			<BottomNavigationAction label="Home" icon={<Home />} showLabel />
			<BottomNavigationAction label="Favorites" icon={<Favorite />} showLabel />
			<BottomNavigationAction label="Profile" icon={<Person />} showLabel />
		</BottomNavigation>
	);
};

export default MuiBottomNavigation;
