import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import fetchData from "./fetchData";
import { Stack } from "@mui/system";

const SearchResults = () => {
    // get parameters
    const { searchTerm } = useParams();
    const [videos, setVideos] = React.useState([]);
    console.log("searchTerm", searchTerm);
    useEffect(() => {
        const data = fetchData(searchTerm);
        data.then((result) => {
            setVideos(result.items);
        });
    }, [searchTerm]);
    return (
        <Stack>
            <Box style={{ display: "flex", justifyContent: "center"}}>
            <Videos videos={videos} setVideos={setVideos} />   
            </Box>
        </Stack>
    )
}
export default SearchResults;