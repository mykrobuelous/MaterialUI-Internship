import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from "@mui/lab";

const MuiTimeline = () => {
	return (
		<Timeline position="alternate">
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">9:30 AM</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot color="secondary" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>City A</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">10:00 AM</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot color="secondary" variant="outlined" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>City B</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent color="text.secondary">10:30 AM</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
				</TimelineSeparator>
				<TimelineContent>City C</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
};

export default MuiTimeline;
