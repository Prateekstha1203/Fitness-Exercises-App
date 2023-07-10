import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import Loader from "./Loader";
import SimilarScrollBar from "../component/SimilarScrollBar";

const SimilarExercises = ({ targetMuscle, equipmentMuscle }) => {
  console.log(equipmentMuscle);
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercise that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscle.length !== 0 ? (
          <SimilarScrollBar data={targetMuscle} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h3" mt={5} mb={5}>
        Exercise that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentMuscle.length !== 0 ? (
          <SimilarScrollBar data={equipmentMuscle} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
