import { Autocomplete, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

type Skill = {
	id: number;
	label: string;
};

const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];

const skillsOptions = skills.map((skill, index) => ({ id: index + 1, label: skill }));

const MuiAutoComplete = () => {
	const [value, setValue] = useState<string | null>(null);
	const [skill, setSkill] = useState<Skill | null>(null);

	const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: string | null) => {
		setValue(newValue);
	};
	const handleSkillChange = (event: React.SyntheticEvent<Element, Event>, newValue: Skill | null) => {
		console.log({ newValue });
		return setSkill(newValue);
	};

	return (
		<Stack spacing={2} width="250px">
			<Autocomplete
				options={skills}
				renderInput={(params) => <TextField {...params} label="skills" />}
				value={value}
				onChange={handleChange}
				freeSolo
			/>
			<Typography variant="h2">{value}</Typography>
			<Autocomplete
				options={skillsOptions}
				renderInput={(params) => <TextField {...params} label="skills" />}
				value={skill}
				onChange={handleSkillChange}
			/>
		</Stack>
	);
};

export default MuiAutoComplete;
