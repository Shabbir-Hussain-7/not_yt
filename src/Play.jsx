import React from "react";
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import SearchBar from "./SearchBar";
import { Stack } from "@mui/system";

const Play = () => {
    const { videoId } = useParams();
    return (
        <Stack>
            <SearchBar />
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh", width: "40vw", margin: "auto"}}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} width="100%" height="100%" controls/>
            </Box>
        </Stack>
    )
}

export default Play;