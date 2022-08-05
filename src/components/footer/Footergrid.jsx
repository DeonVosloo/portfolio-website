import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CustomLinks from '../customlinks/CustomLinks';

const pages = ['Home', 'About', 'Work', "Skills"];


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 3,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#308fe8' : '#2947c2',
    },
  }));

export default function FooterGrid() 
{
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2} sx={{display: "flex", justifyContent: "center" }}>
        <Grid item xs={9.5} md={8}>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex'}, justifyContent: "start" }}>      
              {pages.map((page) => (
                <Button variant="text" sx={{fontFamily: `Ubuntu, sans-serif`, textTransform: "none", color: "white",}}>
                  <CustomLinks pageValue={page} CustomColorValue={"white"}/>
                </Button>
              ))}
          </Box>
        </Grid>
        <Grid item xs={1.5} >
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Click me to open my Github profile" sx={{fontFamily: `Ubuntu, sans-serif`}}>
              <IconButton onClick={() => window.open("https://github.com/DeonVosloo", "_blank")} sx={{ p: 0 }}>
                <GitHubIcon sx={{color: "white"}}/>
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>
        <Grid item xs={11.1} md={9.6} sx={{marginTop: "1%"}}>
            <BorderLinearProgress variant="determinate" value={100} />
        </Grid>

        <Grid item xs={11} md={4.75} sx={{display: "flex", justifyContent: { xs: 'center', md: 'start' }, marginTop: "1%", marginBottom: "1.5%", color: "white", fontFamily: `Ubuntu, sans-serif`}}>
          <Typography variant="p" color="">© 2022 Deon Vosloo. All Rights Reserved. Created with React.js and MUI</Typography>
        </Grid>

        <Grid item xs={11} md={2.375} sx={{display: "flex", justifyContent: { xs: 'center', md: 'start' }, marginTop: "1%", marginBottom: "1.5%", color: "white", fontFamily: `Ubuntu, sans-serif`}}>
          <Box>
            <Typography variant="p" color="">{"Email: deonvosloo3366@gmail.com "}</Typography>
          </Box>
        </Grid>

        <Grid item xs={11} md={2.375} sx={{display: "flex", justifyContent: { xs: 'center', md: 'start' }, marginTop: "1%", marginBottom: "1.5%", color: "white", fontFamily: `Ubuntu, sans-serif`}}>
          <Box>
            <Typography variant="p" color="">{"Cell: 071 880 7324"}</Typography>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
}
