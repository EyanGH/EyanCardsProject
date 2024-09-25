import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useEffect } from "react";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  // Update the URL whenever the searchTerm changes
  useEffect(() => {
    const queryParam = searchTerm ? `?title=${encodeURIComponent(searchTerm)}` : "";
    navigate(queryParam, { replace: true }); // Update URL without adding to history
  }, [searchTerm, navigate]);

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
