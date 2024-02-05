import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";

const MuiBadge = () => {
	return (
		<Stack spacing={2} direction="row">
			<Badge badgeContent={5} color="primary">
				<Mail />
			</Badge>
			<Badge badgeContent={0} color="secondary">
				<Mail />
			</Badge>
			<Badge badgeContent={0} color="secondary" showZero>
				<Mail />
			</Badge>
			<Badge badgeContent={100} color="error" max={3}>
				<Mail />
			</Badge>
			<Badge variant="dot" color="error">
				<Mail />
			</Badge>
			<Badge variant="dot" color="error" invisible={true}>
				<Mail />
			</Badge>
		</Stack>
	);
};

export default MuiBadge;
