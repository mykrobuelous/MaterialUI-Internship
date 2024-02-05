import { Mail } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

const MuiList = () => {
	return (
		<Box sx={{ width: "400px", bgcolor: "#efefef" }}>
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<ListItemAvatar>
								<Avatar>
									<Mail />
								</Avatar>
							</ListItemAvatar>
						</ListItemIcon>
						<ListItemText primary="List Item 1" secondary="Secondary Text" />
					</ListItemButton>
				</ListItem>
				<Divider />
				<ListItem>
					<ListItemIcon>
						<ListItemAvatar>
							<Avatar>
								<Mail />
							</Avatar>
						</ListItemAvatar>
					</ListItemIcon>
					<ListItemText primary="List Item 1" secondary="Secondary Text" />
				</ListItem>
				<Divider />
				<ListItem>
					<ListItemIcon>
						<ListItemAvatar>
							<Avatar>
								<Mail />
							</Avatar>
						</ListItemAvatar>
					</ListItemIcon>
					<ListItemText primary="List Item 1" secondary="Secondary Text" />
				</ListItem>
			</List>
		</Box>
	);
};

export default MuiList;
