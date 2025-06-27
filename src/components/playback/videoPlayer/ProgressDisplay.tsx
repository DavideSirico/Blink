import { Typography } from "@mui/material";
import React from "react";
import { useShallow } from "zustand/shallow";
import ticksDisplay from "@/utils/methods/ticksDisplay";
import { usePlaybackStore } from "@/utils/store/playback";

const ProgressDislay = () => {
	const { currentTime, itemDuration, isUserSeeking, seekValue } =
		usePlaybackStore(
			useShallow((state) => ({
				currentTime: state.playerState.currentTime,
				itemDuration: state.metadata.itemDuration,
				isUserSeeking: state.playerState.isUserSeeking,
				seekValue: state.playerState.seekValue,
			})),
		);
	return (
		<div className="video-player-osd-controls-timeline-text">
			<Typography>
				{ticksDisplay(isUserSeeking ? (seekValue ?? 0) : (currentTime ?? 0))}
			</Typography>
			<Typography>{ticksDisplay(itemDuration)}</Typography>
		</div>
	);
};

export default ProgressDislay;
