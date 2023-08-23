import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollbar from "../components/HorizontalScrollbar";
import Loader from "../components/Loader";

const SimilarExercises = (targetMuscleExercises, equipmentExercises) => {
  console.log(targetMuscleExercises);
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" color="#ffffff">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar
            data={targetMuscleExercises}
            bodyParts
            setBodyPart
            bodyPart
          />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
