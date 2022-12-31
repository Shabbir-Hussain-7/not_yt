import React from "react";
import { Link } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const SingleVideo = ({video}) => {
    return (
        <Card sx={{ width:{ md: "345px", xs: "100%" }, margin: "10px" }}>
            <Link to={`/play/${video.id.videoId}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={video.snippet.thumbnails.medium.url}
                        alt="video thumbnail"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {video.snippet.title.slice(0, 30)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {video.snippet.description.slice(0, 100)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
        
    )
}

export default SingleVideo;