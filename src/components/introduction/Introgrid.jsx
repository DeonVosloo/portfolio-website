import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Introtab from './Introtab';
import Banner from './Banner';



export default function Introgrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{display: "flex", justifyContent: "center"}}>
      <Grid item xs={12} sm={11.5}  md={10} lg={9.5}> 
          <Banner/>
        </Grid>
        <Grid item xs={12} sm={11.5} md={10.5} lg={8} sx={{marginTop: "6%"}} >
          <Introtab/>
        </Grid>
      </Grid>
    </Box>
  );
}
