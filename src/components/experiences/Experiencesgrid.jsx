import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import ExperiencesButtonGrid from './Experiencesbuttongrid';



export default function ExperiencesGrid() {
  return (
    <Box sx={{ flexGrow: 1, p: "2%", display: "flex", justifyContent: "center"}}>
      <Grid container spacing={2} sx={{display: "flex", justifyContent: "center"}}>
      <Grid item xs={12} md={10} lg={8.3}>
          <Typography variant="h2" color="white" sx={{fontFamily: `Ubuntu, sans-serif`, display: "flex", justifyContent: "flex-start",}}>Experiences</Typography>
        </Grid>
        <Grid item xs={12} md={10} lg={8.3}>
          <ExperiencesButtonGrid/>
        </Grid>
        <Grid item xs={12} md={10} lg={8}>
        </Grid>
      </Grid>
    </Box>
  );
}
