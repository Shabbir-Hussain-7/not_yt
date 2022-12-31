import React from "react";
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import SingleVideo from "./SingleVideo";
const Videos = ({videos}) => {
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
            {videos.map((video, index) => {
                    return (<Box key={index}>
                       {video.id.videoId && <SingleVideo video={video} />}

                    </Box>)
                })}  

        </Stack>
                  
    )
}
export default Videos;