import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const tableData = [
	{
		id: 1,
		first_name: "Ted",
		last_name: "Gurry",
		email: "tgurry0@senate.gov",
		gender: "Female",
		ip_address: "198.27.8.51",
	},
	{
		id: 2,
		first_name: "Jonah",
		last_name: "McGrale",
		email: "jmcgrale1@gizmodo.com",
		gender: "Agender",
		ip_address: "245.88.77.27",
	},
	{
		id: 3,
		first_name: "Rory",
		last_name: "Minichi",
		email: "rminichi2@icio.us",
		gender: "Agender",
		ip_address: "213.174.137.93",
	},
	{
		id: 4,
		first_name: "Merlina",
		last_name: "Revell",
		email: "mrevell3@hatena.ne.jp",
		gender: "Female",
		ip_address: "52.33.73.100",
	},
	{
		id: 5,
		first_name: "Gardiner",
		last_name: "Veelers",
		email: "gveelers4@trellian.com",
		gender: "Male",
		ip_address: "184.242.238.30",
	},
	{
		id: 6,
		first_name: "Sherman",
		last_name: "Managh",
		email: "smanagh5@slashdot.org",
		gender: "Male",
		ip_address: "38.25.77.199",
	},
	{
		id: 7,
		first_name: "Conrado",
		last_name: "Ourtic",
		email: "courtic6@examiner.com",
		gender: "Male",
		ip_address: "188.77.154.102",
	},
	{
		id: 8,
		first_name: "Ysabel",
		last_name: "Bum",
		email: "ybum7@cbsnews.com",
		gender: "Bigender",
		ip_address: "92.135.59.224",
	},
	{
		id: 9,
		first_name: "Fiorenze",
		last_name: "Betty",
		email: "fbetty8@hp.com",
		gender: "Female",
		ip_address: "196.81.211.28",
	},
	{
		id: 10,
		first_name: "Clem",
		last_name: "Garvill",
		email: "cgarvill9@a8.net",
		gender: "Male",
		ip_address: "66.140.194.117",
	},
];

const MuiTable = () => {
	return (
		<TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
			<Table aria-label="simple table" stickyHeader>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>First Name</TableCell>
						<TableCell>Last Name</TableCell>
						<TableCell align="center">Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tableData.map((row) => (
						<TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.first_name}</TableCell>
							<TableCell>{row.last_name}</TableCell>
							<TableCell align="center">{row.email}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MuiTable;
