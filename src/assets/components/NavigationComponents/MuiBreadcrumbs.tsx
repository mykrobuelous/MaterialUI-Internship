import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MuiBreadcrumbs = () => {
	return (
		<Box p={2}>
			<Breadcrumbs
				aria-label="breacrumb"
				separator={<NavigateNextIcon fontSize="small" />}
				maxItems={2}
				itemsBeforeCollapse={2}
			>
				<Link underline="hover" href="#">
					Home
				</Link>
				<Link underline="hover" href="#">
					Cataglog
				</Link>
				<Link underline="hover" href="#">
					Accessories
				</Link>
				<Typography color="text.primary">Shoes</Typography>
			</Breadcrumbs>
		</Box>
	);
};

export default MuiBreadcrumbs;
