import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FF6400",
            fontSize: "14px",
            borderRadius: "7px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#FF6400",
            background: "#FFFFFF",
            fontSize: "14px",
            borderRadius: "7px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#ffffff"
        fontWeight="bold"
        mt="5px"
        pb="10px"
        textTransform="capitalize"
        fontSize="17px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
