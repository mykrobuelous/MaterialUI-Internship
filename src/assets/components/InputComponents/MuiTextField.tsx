import { InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const MuiTextField = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [value, setValue] = useState<string>("");

	return (
		<Stack spacing={4}>
			<Stack direction="row" spacing={2}>
				<TextField label="Name" variant="outlined" />
				<TextField label="Name" variant="filled" />
				<TextField label="Name" variant="standard" />
			</Stack>
			<Stack direction="row" spacing={2}>
				<TextField label="Name" variant="outlined" size="small" color="error" />
			</Stack>
			<Stack direction="row" spacing={2}>
				<TextField label="Name" variant="outlined" size="small" color="error" required />
				<TextField
					label="Name"
					variant="outlined"
					size="medium"
					color="error"
					helperText="Do not share your password with anyone"
					type="date"
					InputLabelProps={{ shrink: true }}
				/>
				<TextField
					label="Name"
					variant="outlined"
					size="medium"
					color="error"
					helperText="Do not share your password with anyone"
					type="password"
				/>
				<TextField
					label="Name"
					variant="outlined"
					size="medium"
					color="error"
					helperText="Do not share your password with anyone"
					disabled
				/>
				<TextField
					label="Name"
					variant="outlined"
					size="medium"
					color="error"
					helperText="Do not share your password with anyone"
					InputProps={{ readOnly: true }}
				/>
			</Stack>
			<Stack direction="row" spacing={2}>
				<TextField
					label="Amount"
					InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
				/>
				<TextField
					label="Weight"
					InputProps={{ endAdornment: <InputAdornment position="start">kg</InputAdornment> }}
				/>
				<TextField
					label="Password"
					type={showPassword ? "text" : "password"}
					InputProps={{
						endAdornment: (
							<InputAdornment position="start">
								{!showPassword ? (
									<VisibilityIcon
										onClick={() => {
											setShowPassword((prevState) => !prevState);
										}}
										style={{ cursor: "pointer" }}
									/>
								) : (
									<VisibilityOffIcon
										onClick={() => {
											setShowPassword((prevState) => !prevState);
										}}
										style={{ cursor: "pointer" }}
									/>
								)}
							</InputAdornment>
						),
					}}
				/>
			</Stack>
			<Stack spacing={2} direction="row">
				<TextField
					label="Password"
					required
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					error={!value}
					helperText={!value ? "Required" : "Do not share your password with anyone"}
				/>
			</Stack>
		</Stack>
	);
};

export default MuiTextField;
