import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.svg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF4601" fontWeight="600" fontSize="26px">
        Fiteness Club
      </Typography>
      <Typography
        color="#FFFFFF"
        fontWeight="600"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography color="#FFFFFF" fontSize="22px" lineHeight="35px" mb={4}>
        Checkoput the most effective Exercises
      </Typography>
      <Button
        variant="outlined"
        href="#exercises"
        sx={{ color: "#ffffff", backgroundColor: "#FF4601" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF4300"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
