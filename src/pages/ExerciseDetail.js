import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import SimilarExercises from "../component/SimilarExercises";
import Detail from "../component/Details";
import ExerciseVideo from "../component/ExerciseVideos";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscleExerciseData, setTargetMuscleExerciseData] = useState([]);
  const [equipmentMuscleExerciseData, setEquipmentMuscleExerciseData] =
    useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDBUrl = "https://exercisedb.p.rapidapi.com/exercises";

      const exerciseDetailsData = await fetchData(
        `${exerciseDBUrl}/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail([exerciseDetailsData]);
    };

    fetchExerciseData();
  }, [id]);

  useEffect(() => {
    if (exerciseDetail.length > 0) {
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDBUrl = "https://exercisedb.p.rapidapi.com/exercises";

      const videoName = exerciseDetail[0].name;

      const fetchExerciseVideoData = async () => {
        const exerciseVideoData = await fetchData(
          `${youtubeSearchUrl}/search?query=${videoName}`,
          youtubeOptions
        );

        setExerciseVideo(exerciseVideoData.contents);
        const targetMuscleExerciseData = await fetchData(
          `${exerciseDBUrl}/target/${exerciseDetail[0].target}`,
          exerciseOptions
        );
        setTargetMuscleExerciseData(targetMuscleExerciseData);

        const equipmentMuscleExerciseData = await fetchData(
          `${exerciseDBUrl}/equipment/${exerciseDetail[0].equipment}`,exerciseOptions
        );
        setEquipmentMuscleExerciseData(equipmentMuscleExerciseData);
        console.log(equipmentMuscleExerciseData);
      };
      fetchExerciseVideoData();
    }
  }, [exerciseDetail]);

  // Render a loading state or handle the empty array case
  if (exerciseDetail.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail[0]} />
      <ExerciseVideo
        exerciseVideoData={exerciseVideo}
        name={exerciseDetail[0].name}
      />
      <SimilarExercises
        targetMuscle={targetMuscleExerciseData}
        equipmentMuscle={equipmentMuscleExerciseData}
      />
    </Box>
  );
};

export default ExerciseDetails;
