import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


const SimilarScrollBar = ({ data }) => {

    return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
             <Box
             key={item.id || item}
             itemID={item.id || item}
             title={item.id || item}
             m="0 40px"
           >
           <ExerciseCard key={item.id || item} exercise={item} />
           </Box>
          
        ))}
      </ScrollMenu>
    );
  };
// const SimilarScrollBar = ({ data }) => {
//     console.log(data)
//   return (
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//       {data.map((item) => (
       
//       ))}
//     </ScrollMenu>
//   );
// };

export default SimilarScrollBar;
