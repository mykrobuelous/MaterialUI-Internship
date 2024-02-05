import MuiButton from "./assets/components/InputComponents/MuiButton";
import MuiTypography from "./assets/components/InputComponents/MuiTypography";
import "./App.css";
import MuiTextField from "./assets/components/InputComponents/MuiTextField";
import MuiSelect from "./assets/components/InputComponents/MuiSelect";
import MuiRadioButton from "./assets/components/InputComponents/MuiRadioButton";
import MuiCheckbox from "./assets/components/InputComponents/MuiCheckbox";
import MuiSwitch from "./assets/components/InputComponents/MuiSwitch";
import {
	Box,
	Divider,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Radio,
	RadioGroup,
	Stack,
	Typography,
} from "@mui/material";
import { useState } from "react";
import MuiRating from "./assets/components/InputComponents/MuiRating";
import MuiAutoComplete from "./assets/components/InputComponents/MuiAutoComplete";
import MuiLayout from "./assets/components/LayoutComponents/MuiLayout";
import MuiCard from "./assets/components/LayoutComponents/MuiCard";
import MuiAccordian from "./assets/components/LayoutComponents/MuiAccordian";
import MuiImageList from "./assets/components/LayoutComponents/MuiImageList";
import MuiNavbar from "./assets/components/NavigationComponents/MuiNavbar";
import MuiLink from "./assets/components/NavigationComponents/MuiLink";
import MuiBreadcrumbs from "./assets/components/NavigationComponents/MuiBreadcrumbs";
import MuiDrawer from "./assets/components/NavigationComponents/MuiDrawer";
import MuiSpeedDial from "./assets/components/NavigationComponents/MuiSpeedDial";
import MuiBottomNavigation from "./assets/components/NavigationComponents/MuiBottomNavigation";
import MuiAvatar from "./assets/components/DataDisplayComponents/MuiAvatar";
import MuiBadge from "./assets/components/DataDisplayComponents/MuiBadge";
import MuiList from "./assets/components/DataDisplayComponents/MuiList";
import MuiChip from "./assets/components/DataDisplayComponents/MuiChip";
import MuiTooltip from "./assets/components/DataDisplayComponents/MuiTooltip";
import MuiTable from "./assets/components/DataDisplayComponents/MuiTable";
import MuiAlert from "./assets/components/FeedbackComponents/MuiAlert";
import MuiSnackbar from "./assets/components/FeedbackComponents/MuiSnackbar";
import MuiDialog from "./assets/components/FeedbackComponents/MuiDialog";
import MuiProgress from "./assets/components/FeedbackComponents/MuiProgress";
import MuiSkeleton from "./assets/components/FeedbackComponents/MuiSkeleton";
import MuiLoadingButton from "./assets/components/LabComponents/MuiLoadingButton";
import MuiTabs from "./assets/components/LabComponents/MuiTabs";
import MuiTimeline from "./assets/components/LabComponents/MuiTimeline";
import MuiMasonry from "./assets/components/LabComponents/MuiMasonry";
import MuiResponsiveness from "./assets/components/OtherComponents/MuiResponsiveness";

function App() {
	const [view, setView] = useState<string>("typography");

	const handleViewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setView(event.target.value);
	};

	return (
		<div className="App">
			<Typography variant="h2">Material UI Bacal</Typography>
			<Box>
				<FormControl>
					<RadioGroup value={view} onChange={handleViewChange}>
						<FormLabel>Input Fields</FormLabel>
						<FormGroup row>
							<FormControlLabel label="Typography" control={<Radio value="typography" />} />
							<FormControlLabel label="Button" control={<Radio value="button" />} />
							<FormControlLabel label="Textfield" control={<Radio value="textfield" />} />
							<FormControlLabel label="Select" control={<Radio value="select" />} />
							<FormControlLabel label="Radio Button" control={<Radio value="radiobutton" />} />
							<FormControlLabel label="Checkbox" control={<Radio value="checkbox" />} />
							<FormControlLabel label="Switch" control={<Radio value="switch" />} />
							<FormControlLabel label="Rating" control={<Radio value="rating" />} />
							<FormControlLabel label="Auto Complete" control={<Radio value="autocomplete" />} />
						</FormGroup>
						<Stack direction={"row"} spacing={4}>
							<Stack>
								<FormLabel>Layout</FormLabel>
								<FormGroup row>
									<FormControlLabel label="Layout" control={<Radio value="layout" />} />
									<FormControlLabel label="Card" control={<Radio value="card" />} />
									<FormControlLabel label="Accordian" control={<Radio value="accordian" />} />
									<FormControlLabel label="Image List" control={<Radio value="imagelist" />} />
								</FormGroup>
							</Stack>
							<Divider orientation="vertical" flexItem />
							<Stack>
								<FormLabel>Navigation</FormLabel>
								<FormGroup row>
									<FormControlLabel label="Navbar" control={<Radio value="navbar" />} />
									<FormControlLabel label="Link" control={<Radio value="link" />} />
									<FormControlLabel label="Bread Crumbs" control={<Radio value="breadcrumbs" />} />
									<FormControlLabel label="Drawer" control={<Radio value="drawer" />} />
									<FormControlLabel label="Speed Dial" control={<Radio value="speeddial" />} />
									<FormControlLabel label="Bottom Navigation" control={<Radio value="bottomnav" />} />
								</FormGroup>
							</Stack>
						</Stack>
						<Stack direction="row" spacing={4}>
							<Stack>
								<FormLabel>Data Display</FormLabel>
								<FormGroup row>
									<FormControlLabel label="Avatar" control={<Radio value="avatar" />} />
									<FormControlLabel label="Badge" control={<Radio value="badge" />} />
									<FormControlLabel label="List" control={<Radio value="list" />} />
									<FormControlLabel label="Chip" control={<Radio value="chip" />} />
									<FormControlLabel label="Tooltip" control={<Radio value="tooltip" />} />
									<FormControlLabel label="Table" control={<Radio value="table" />} />
								</FormGroup>
							</Stack>
							<Divider orientation="vertical" flexItem />
							<Stack>
								<FormLabel>Alert</FormLabel>
								<FormGroup row>
									<FormControlLabel label="Alert" control={<Radio value="alert" />} />
									<FormControlLabel label="Snackbar" control={<Radio value="snackbar" />} />
									<FormControlLabel label="Dialog" control={<Radio value="dialog" />} />
									<FormControlLabel label="Progress" control={<Radio value="progress" />} />
									<FormControlLabel label="Skeleton" control={<Radio value="skeleton" />} />
								</FormGroup>
							</Stack>
						</Stack>
						<Stack direction="row" spacing={4}>
							<Stack>
								<FormLabel>Lab</FormLabel>
								<FormGroup row>
									<FormControlLabel
										label="Loading Button"
										control={<Radio value="loadingbutton" />}
									/>
									<FormControlLabel label="Tabs" control={<Radio value="tabs" />} />
									<FormControlLabel label="Timeline" control={<Radio value="timeline" />} />
									<FormControlLabel label="Masonry" control={<Radio value="masonry" />} />
								</FormGroup>
							</Stack>
							<Divider orientation="vertical" flexItem />
							<Stack>
								<FormLabel>Others</FormLabel>
								<FormGroup row>
									<FormControlLabel
										label="Responsiveness"
										control={<Radio value="responsiveness" />}
									/>
								</FormGroup>
							</Stack>
						</Stack>
					</RadioGroup>
				</FormControl>
			</Box>
			<Box
				height="100%"
				sx={{
					mt: 3,
					border: "1px solid #c4c4c4",
					borderRadius: "4px",
					p: 5,
					overflow: "auto",
				}}
			>
				<FormControl fullWidth sx={{ height: "100%" }}>
					<FormGroup
						sx={{
							display: "flex",
							alignItems: "center",
							height: "100%",
						}}
					>
						{view === "typography" && <MuiTypography />}
						{view === "button" && <MuiButton />}
						{view === "textfield" && <MuiTextField />}
						{view === "select" && <MuiSelect />}
						{view === "radiobutton" && <MuiRadioButton />}
						{view === "checkbox" && <MuiCheckbox />}
						{view === "switch" && <MuiSwitch />}
						{view === "rating" && <MuiRating />}
						{view === "autocomplete" && <MuiAutoComplete />}
						{view === "layout" && <MuiLayout />}
						{view === "card" && <MuiCard />}
						{view === "accordian" && <MuiAccordian />}
						{view === "imagelist" && <MuiImageList />}
						{view === "navbar" && <MuiNavbar />}
						{view === "link" && <MuiLink />}
						{view === "breadcrumbs" && <MuiBreadcrumbs />}
						{view === "drawer" && <MuiDrawer />}
						{view === "speeddial" && <MuiSpeedDial />}
						{view === "bottomnav" && <MuiBottomNavigation />}
						{view === "avatar" && <MuiAvatar />}
						{view === "badge" && <MuiBadge />}
						{view === "list" && <MuiList />}
						{view === "chip" && <MuiChip />}
						{view === "tooltip" && <MuiTooltip />}
						{view === "table" && <MuiTable />}
						{view === "alert" && <MuiAlert />}
						{view === "snackbar" && <MuiSnackbar />}
						{view === "dialog" && <MuiDialog />}
						{view === "progress" && <MuiProgress />}
						{view === "skeleton" && <MuiSkeleton />}
						{view === "loadingbutton" && <MuiLoadingButton />}
						{view === "tabs" && <MuiTabs />}
						{view === "timeline" && <MuiTimeline />}
						{view === "masonry" && <MuiMasonry />}
						{view === "responsiveness" && <MuiResponsiveness />}
					</FormGroup>
				</FormControl>
			</Box>
		</div>
	);
}

export default App;
