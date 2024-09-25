import { CircularProgress, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Countries() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredAllCountries, setFilteredAllCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      let response = await fetch("https://restcountries.com/v3.1/all");
      let data = await response.json();
      console.log(data);
      setAllCountries(data);
      setFilteredAllCountries(data);
    };

    getCountries();
  }, []);

  useEffect(() => {
    setFilteredAllCountries(
      allCountries.filter((c) =>
        c.name.common.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  if (allCountries.length === 0) {
    return <CircularProgress />;
  }
  return (
    <div>
      <TextField
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {filteredAllCountries.map((country) => (
        <Typography key={country.name.common}>{country.name.common}</Typography>
      ))}
    </div>
  );
}
