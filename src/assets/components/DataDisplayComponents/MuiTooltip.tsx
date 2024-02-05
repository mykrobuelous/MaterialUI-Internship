import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

const MuiTooltip = () => {
	return (
		<Tooltip title="delete" placement="right" arrow enterDelay={500} leaveDelay={200}>
			<IconButton>
				<Delete />
			</IconButton>
		</Tooltip>
	);
};

export default MuiTooltip;
