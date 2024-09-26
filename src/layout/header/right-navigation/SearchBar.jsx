import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"; 
import { useEffect } from "react";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchParams, setSearchParams] = useSearchParams()
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };


  useEffect(() => {

    setSearchParams({title:searchTerm})
  }, [searchTerm]);

  return (
    <Box sx={{ backgroundColor: "white", display: "flex", alignItems: "center", width: "100%" }}>
      <TextField
        variant="outlined"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ width: "100%" }} 
      />
    </Box>
  );
}

export default Navbar;
