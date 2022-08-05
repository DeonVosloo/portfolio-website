import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Have Heard of it',
  1: 'Novice',
  1.5: 'Novice',
  2: 'Basic Introduction',
  2.5: 'Introduction Level',
  3: 'Familiar',
  3.5: 'Decent',
  4: 'Good',
  4.5: 'Excellent',
  5: 'Excellent',
};

export default function SkillsRating(props) {

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={props.ratingVal}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2, fontFamily: `Ubuntu, sans-serif`}}>{labels[props.ratingVal]}</Box>
    </Box>
  );
}