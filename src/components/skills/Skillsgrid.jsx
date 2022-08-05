import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skillstab from './Skillstab'
import Typography from '@mui/material/Typography'


export default function Skillsgrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{display: "flex", justifyContent: "center"}}>
      <Grid item xs={12} sm={11.5} md={10.5} lg={8.3} >
          <Typography variant="h2" color="white" sx={{display: "flex", justifyContent: "flex-start", p: "2%", fontFamily: `Ubuntu, sans-serif`}}>Skills</Typography>
        </Grid>
        <Grid item xs={12} sm={11.5} md={10.5} lg={8.3} >
          <Skillstab/>
        </Grid>
      </Grid>
      <Typography variant="p" color="white" sx={{p: "1%", }}/>
    </Box>
  );
}
