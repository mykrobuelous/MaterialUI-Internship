import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SettingsIcon from "@mui/icons-material/Settings";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

const MuiButton = () => {
	const [format, setFormat] = useState<string[]>();

	const handleFormatChange = (event: React.MouseEvent<HTMLElement>, updatedFormat: string[]) => {
		setFormat(updatedFormat);
		console.log(format);
	};

	return (
		<Stack spacing={4}>
			<Stack spacing={2} direction="row">
				<Button variant="text" href="https://google.com">
					Text
				</Button>
				<Button variant="contained">contained</Button>
				<Button variant="outlined">outlined</Button>
			</Stack>

			<Stack spacing={2} direction="row">
				<Button variant="outlined" color="primary">
					Lorem.
				</Button>
				<Button variant="outlined" color="secondary">
					Lorem.
				</Button>
				<Button variant="outlined" color="error">
					Lorem.
				</Button>
				<Button variant="outlined" color="warning">
					Lorem.
				</Button>
				<Button variant="outlined" color="info">
					Lorem.
				</Button>
				<Button variant="outlined" color="success">
					Lorem.
				</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button variant="contained" color="primary">
					Lorem
				</Button>
				<Button variant="contained" color="secondary">
					Lorem
				</Button>
				<Button variant="contained" color="error">
					Lorem
				</Button>
				<Button variant="contained" color="warning">
					Lorem
				</Button>
				<Button variant="contained" color="info">
					Lorem
				</Button>
				<Button variant="contained" color="success">
					Lorem
				</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button variant="text" color="primary">
					Lorem.
				</Button>
				<Button variant="text" color="secondary">
					Lorem.
				</Button>
				<Button variant="text" color="error">
					Lorem.
				</Button>
				<Button variant="text" color="warning">
					Lorem.
				</Button>
				<Button variant="text" color="info">
					Lorem.
				</Button>
				<Button variant="text" color="success">
					Lorem.
				</Button>
			</Stack>
			<Stack spacing={2} direction="row" display="block">
				<Button variant="contained" color="primary" size="small">
					Lorem.
				</Button>
				<Button variant="contained" color="secondary" size="medium">
					Lorem.
				</Button>
				<Button variant="contained" color="error" size="large">
					Lorem.
				</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button startIcon={<SendIcon />} variant="contained" disableElevation>
					Lorem.
				</Button>
				<Button endIcon={<SettingsIcon />} variant="contained" disableRipple>
					Lorem.
				</Button>
				<IconButton aria-label="send" color="success" size="small" onClick={() => alert("hey")}>
					<SendIcon />
				</IconButton>
			</Stack>
			<Stack spacing={2} direction="row">
				<ButtonGroup aria-label="alignment button group" variant="text" color="success">
					<Button>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
				<ButtonGroup variant="contained">
					<Button>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
				<ButtonGroup variant="outlined">
					<Button>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
				<Stack direction="row">
					<ToggleButtonGroup
						aria-label="text formatting"
						value={format}
						onChange={handleFormatChange}
						size="large"
						color="success"
						exclusive
					>
						<ToggleButton value="bold">
							<FormatBoldIcon />
						</ToggleButton>
						<ToggleButton value="italics">
							<FormatItalicIcon />
						</ToggleButton>
						<ToggleButton value="udnerline">
							<FormatUnderlinedIcon />
						</ToggleButton>
					</ToggleButtonGroup>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default MuiButton;
