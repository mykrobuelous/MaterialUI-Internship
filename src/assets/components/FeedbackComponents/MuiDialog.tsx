import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

const MuiDialog = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setOpen(true)}>Open Dialog</Button>
			<Dialog
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="dialog-title"
				aria-describedby="dialog-description"
			>
				<DialogTitle id="dialog-title">Submit the test</DialogTitle>
				<DialogContent>
					<DialogContentText id="dialog-description">
						Are you sure you want to submit the test? you will not be able to edit it after submitting
					</DialogContentText>
					<DialogActions>
						<Button onClick={() => setOpen(false)}>Cancel</Button>
						<Button autoFocus>Submit</Button>
					</DialogActions>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default MuiDialog;
