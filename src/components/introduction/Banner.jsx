import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BannerImage from '../../images/banner.jpg'

function Banner() {
  return (
    <Container maxWidth="1500" sx={{backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",
    backgroundImage: `url(${BannerImage})`, height: 250, p:"2%" }} >
        <Box component="div">
    <Grid>
      <Grid item md={6}>
        <Typography component="h1" variant="h5" color="white" gutterBottom sx={{textAlign: "start", paddingLeft: "4%", paddingTop: "4%", fontFamily: `Ubuntu, sans-serif`}}>
          Hello I'm, Deon Vosloo a Fullstack Software Developer.
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Typography component="h1" variant="h5" color="white" gutterBottom sx={{textAlign: "center", paddingTop: "4%", fontFamily: `Ubuntu, sans-serif`}}>
         Welcome to my Portfolio
        </Typography>
      </Grid>
    </Grid>
        </Box>
      </Container>
  )
}

export default Banner



