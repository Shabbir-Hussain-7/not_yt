import React from "react";
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import fetchData from "./fetchData";
import { useEffect } from "react";
import ReactPlayer from "react-player";

const Play = () => {
    const { videoId } = useParams();
    const [video, setVideo] = React.useState({});
    useEffect(() => {
        const data = fetchData(videoId);
        data.then((result) => {
            setVideo(result.items[0]);
        });
    }, [videoId]);
    return (
        <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh", width: "40vw", margin: "auto"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} width="100%" height="100%" controls/>
        </Box>
    )
}

export default Play;