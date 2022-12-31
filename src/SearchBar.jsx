import React from "react";
import Box from '@mui/material/Box';
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
    const [search, setSearch] = React.useState("");
    const navigate = useNavigate();
    const handInput = (e) => {
        setSearch(e.target.value);
    }
    const handleSearch = (event) => {
        event.preventDefault();
        if(search){
            navigate(`/search/${search}`);
            setSearch("");
        }
    }
    return (
        <Stack direction="column" spacing={2}>
        <Box style={{ display: "flex", justifyContent: "center"}}>
            <form onSubmit={handleSearch} style={{width: "100%", maxWidth: "500px"}}>
            <FormControl variant="standard" style={{width: "100%", margin: "30px"}}>
                <InputLabel>
                    Search
                </InputLabel>
                <Input
                    onChange={handInput}
                    name="search field"
                    value={search}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="search"
                                type="submit"
                                onClick={handleSearch}
                                edge="end"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
                
            </form>
        </Box>
        </Stack>

    )
}


export default SearchBar;
