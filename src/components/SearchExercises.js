import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const handleSearch = async () => {
    if (search) {
      // const exercisesData = await fetchData();
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        color="#ffffff"
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              border: "none", // Remove default border
              borderRadius: "4px",
              backgroundColor: "transparent", // Ensure transparent background
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ffffff", // Set the border color
            },
            "& .MuiInputLabel-root": {
              color: "#ffffff", // Set the input label color (placeholder color)
            },
            "& .MuiInputBase-input": {
              color: "#ffffff", // Set the input text color
              fontWeight: "700",
            },
            width: { lg: "800px", xs: "100%" },
            //backgroundColor: "#ffffff",borderRadius:"40px"
          }}
          height="76px"
          value={search}
          onchange={(e) => setSearch(e.target.value.toLowerCase())}
          variant="outlined"
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF4601",
            color: "#ffffff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
