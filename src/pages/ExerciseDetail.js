// HEAD
// import React from "react";

// const ExerciseDetail = () => {
//   return <div>ExerciseDetail</div>;
// };

// export default ExerciseDetail;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';


const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const { id } = useParams();

    useEffect(() =>{
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

    };
    fetchExercisesData();
  }, [id]);


  return (
    <Box>
          <Detail exerciseDetail={exerciseDetail} />
          
        
    </Box>
  )
}

export default ExerciseDetail
// >>>>>>> fc28730d212f9ba045d32efda753b9271a57006e
