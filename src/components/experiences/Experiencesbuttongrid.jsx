import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CodeIcon from '@mui/icons-material/Code';
import { useState } from "react";

export default function ExperiencesButtonGrid() {


  let experiencesData = [
    {
      id: "1",
      duration: "February 2015 - October 2015",
      firstText: "I worked on a License Plate Recognition software for my Third Year Project. " +
      "The program I created could detect and read the license plate number from an image and display" + 
      " the value it read that license plate number as while also highlighting where it detected the License plate on the image. ",
      secondText: "I used the OpenCV library to create the software and it was written in C++"
    },
    {
      id: "2",
      duration: "June 2019 - December 2019",
      firstText: "I worked at PC International as a data capturer / front end Web Developer working with 3 websites that I needed to maintain. " +
      "Part of my duties were to maintain the current websites, add new products to the websites, update current products, " + 
      "Photoshop images for certian products, do mass updates of the products on the websites. ",
      secondText: "I used Excel, Wordpress, Fincon, Photoshop to do my tasks and to maintain the websites"
    },
    {
      id: "3",
      duration: "January 2020 - January 2022",
      firstText: "I worked as a Freelance web developer working for myself. I created websites for customers that commissioned " +
      "such as a gaming clan that hosted their own games servers, where they still use the base website to this day. ",
      secondText: "I used HTML, CSS and Javascript to complete the websites that was commissioned."
    },
    {
      id: "4",
      duration: "14 February 2022 – 15 September 2022",
      firstText: "I worked as a Intern at Belgium Campus. I learned new skills and languages as part of training. " +
      "During this internship we did training projects where we had to show our understanding of the knowledge and skills we learnt. "+
      "This training period was to get us ready for our intership at Belgium Campus Botlhale Village where we would work on real projects using the new skills we learnt in our training. ",
      secondText: "I learnt Flutter, React.JS, Material UI in React.JS, Java Springboot API's during this training period as well improved my existing skills."
    },
    {
      id: "5",
      duration: "23 September 2022 – 18 November 2022",
      firstText: "I worked as a Intern developer at Belgium Campus Botlhale Village. I created API in ASP.NET that was then hosted on a server. " +
      "I was part of two projects and with both projects I created the API's in ASP.NET and used Entity Framework to generate the databases.",
      secondText: "I used ASP.NET and C# to create API's and used Entity Framework to generated the databases."
    }]

  const [active, setActive] = useState("");

  let StartActive = () =>
  {
    if(active !== "1" && active !== "2" && active !== "3" && active !== "4" && active !== "5" )
    {
      setActive("1");
    }
  }

 StartActive();

  const handleClick = (event) => 
  {
    setActive(event.target.id);

  }

  let CheckIfActiveIsValid = (act) =>
  {
    if (act === "1") 
      return true;
    else  if (act === "2") 
      return true;
    else  if (act === "3") 
      return true;
    else  if (act === "4") 
      return true;
    else  if (act === "5") 
      return true;
    else
    return false;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{display: "flex", justifyContent: "center", textAlign: "start"}}>
        <Grid item xs={11.5} md={5} lg={5} container spacing={2} >
            <Grid item xs={12} md={9} lg={8}>
                <Button id={"1"} variant={active === "1" ? "contained" : "text"} startIcon={<DataObjectIcon/>} fullWidth= "true" sx={{
                  color: "white", display: "flex", justifyContent: "start", fontFamily: `Ubuntu, sans-serif`
                  , bgcolor: active === "1" ? "#131631": "transparent"}} onClick={handleClick}>
                  Third Year Project
                </Button>      
            </Grid>

            <Grid item xs={12} md={9} lg={8}>
              <Button id={"2"} variant={active === "2" ? "contained" : "text"} startIcon={<CodeIcon/>} fullWidth= "true" sx={{
                color: "white", display: "flex", justifyContent: "start", fontFamily: `Ubuntu, sans-serif`,
                bgcolor: active === "2" ? "#131631": "transparent"}} onClick={handleClick}>
                PC International
              </Button>
            </Grid>

            <Grid item xs={12} md={9} lg={8}>
              <Button id={"3"} variant={active === "3" ? "contained" : "text"}  startIcon={<CodeIcon/>} fullWidth= "true" sx={{
                color: "white", display: "flex", justifyContent: "start", fontFamily: `Ubuntu, sans-serif`, textAlign: "start"
                , bgcolor: active === "3" ? "#131631": "transparent"}} onClick={handleClick}>
                Freelance Web Developer
              </Button>
            </Grid>

            <Grid item xs={12} md={9} lg={8}>
              <Button id={"4"} variant={active === "4" ? "contained" : "text"}  startIcon={<CodeIcon/>} fullWidth= "true" sx={{
                color: "white", display: "flex", justifyContent: "start", fontFamily: `Ubuntu, sans-serif`, textAlign: "start"
                , bgcolor: active === "4" ? "#131631": "transparent"}} onClick={handleClick}>
                Intern at Belgium Campus
              </Button>
            </Grid>
            <Grid item xs={12} md={9} lg={8}>
              <Button id={"5"} variant={active === "5" ? "contained" : "text"}  startIcon={<CodeIcon/>} fullWidth= "true" sx={{
                color: "white", display: "flex", justifyContent: "start", fontFamily: `Ubuntu, sans-serif`, textAlign: "start"
                , bgcolor: active === "5" ? "#131631": "transparent"}} onClick={handleClick}>
                Intern at Bothale Village
              </Button>
            </Grid>
        </Grid>
        <Grid item xs={11.5} md={7} lg={7} container spacing={0}>
        <Box>
          <Grid item xs={12} md={9} lg={8} container spacing={1} >

            <Grid item xs={12} md={9} lg={8}>        
              <Typography variant="p" color="white" sx={{fontFamily: `Ubuntu, sans-serif`, color: "#007aff"}}>
                {experiencesData[CheckIfActiveIsValid(active) ? active -1 : 0].duration}  
              </Typography> <br/>
            </Grid>

            <Grid item xs={12} md={9} lg={8}>        
              <Typography variant="p" color="white" sx={{fontFamily: `Ubuntu, sans-serif`, color: "#007aff"}}> 
              </Typography>
            </Grid>
            
          </Grid>

          <Grid item xs={12} md={9} lg={8}>
            <Typography variant="p" color="white" sx={{fontFamily: `Ubuntu, sans-serif`, color: "white"}}>
              {experiencesData[CheckIfActiveIsValid(active) ? active -1 : 0].firstText}  
            </Typography>
            <Typography variant="p" color="white" sx={{fontFamily: `Ubuntu, sans-serif`, color: "#bbe5ff"}}>
              {experiencesData[CheckIfActiveIsValid(active) ? active -1 : 0].secondText}  
            </Typography>
            
          </Grid>

        </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
