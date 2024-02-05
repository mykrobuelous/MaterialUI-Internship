import {
	Box,
	FormControlLabel,
	Checkbox,
	FormControl,
	FormLabel,
	FormGroup,
	FormHelperText,
	Switch,
} from "@mui/material";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const MuiCheckbox = () => {
	const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
	const [skills, setSkills] = useState<string[]>([]);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAcceptTerms(event.target.checked);
	};
	const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const index = skills.indexOf(event.target.value);
		if (index === -1) setSkills((prevSkills) => [...prevSkills, event.target.value]);
		else setSkills((prevSkills) => prevSkills.filter((skill) => skill !== event.target.value));
	};

	console.log(skills);
	return (
		<Box>
			<Box>
				<FormControlLabel
					label="I accept terms and conditions"
					control={<Checkbox checked={acceptTerms} onChange={handleChange} size="small" color="secondary" />}
				/>
			</Box>
			<Box>
				<Checkbox
					icon={<BookmarkBorderIcon />}
					checkedIcon={<BookmarkIcon />}
					checked={acceptTerms}
					onChange={handleChange}
				/>
			</Box>
			<Box>
				<FormControl error>
					<FormLabel>Skills</FormLabel>
					<FormGroup row>
						<FormControlLabel
							label="HTML"
							control={
								<Checkbox
									value="html"
									checked={skills.includes("html")}
									onChange={handleSkillsChange}
								/>
							}
						/>
						<FormControlLabel
							label="CSS"
							control={
								<Checkbox value="css" checked={skills.includes("css")} onChange={handleSkillsChange} />
							}
						/>
						<FormControlLabel
							label="Javascript"
							control={
								<Switch
									value="javascript"
									checked={skills.includes("javascript")}
									onChange={handleSkillsChange}
								/>
							}
						/>
					</FormGroup>
					<FormHelperText>Invalid Selection</FormHelperText>
				</FormControl>
			</Box>
		</Box>
	);
};

export default MuiCheckbox;
