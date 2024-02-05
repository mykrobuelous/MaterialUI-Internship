import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import { useState } from "react";

const MuiChip = () => {
	const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
	const handleDelete = (chipToDelete: string) => {
		setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
	};
	return (
		<Stack direction="row" spacing={1}>
			<Chip label="Chip" color="primary" size="small" />
			<Chip label="Chip Oultine" color="secondary" size="small" variant="outlined" />
			<Chip label="Chip Oultine" color="secondary" size="small" avatar={<Avatar>V</Avatar>} variant="outlined" />
			<Chip label="Chip Oultine" color="secondary" size="small" variant="outlined" icon={<Face />} />
			<Chip label="Click" color="success" onClick={() => alert("Clicked")} />
			<Chip
				label="Delete"
				color="error"
				onClick={() => alert("Clicked")}
				onDelete={() => alert("Delete handler called.")}
			/>
			{chips.map((chip) => (
				<Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
			))}
		</Stack>
	);
};

export default MuiChip;
