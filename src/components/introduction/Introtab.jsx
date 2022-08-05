import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Introtab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: '#131631', textAlign: "start",}}>
      <AppBar position="static" sx={{bgcolor: "#131631"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="white"
          variant="fullWidth"
          aria-label="readme.js"
          sx={{textTransform: "none", fontFamily: `Ubuntu, sans-serif`,}}
        >
          <Tab label="readme.js" {...a11yProps(0)} sx={{textTransform: "none", fontSize: 12, fontFamily: `Ubuntu, sans-serif`, display: "flex"}}/>
          <Tab label="" disabled={true}/>
          <Tab label="" disabled={true}/>
          <Tab label="" disabled={true}/>
          <Tab label="" disabled={true}/>
          <Tab label="" disabled={true}/>
          <Tab label="" disabled={true}/>
        </Tabs>
      </AppBar>

      

        <TabPanel value={value} index={0} dir={theme.direction} width={"85%"} sx={{textColor: "white",}}>
          <Typography variant="p" color="white" textAlign={"start"} padding={"2%"} sx={{fontFamily: `Ubuntu, sans-serif`}}>
          I'm Deon Vosloo, a  
          <Typography variant="p" color="#308fe8" textAlign={"start"} sx={{fontFamily: `Ubuntu, sans-serif`}}>
           {" Full Stack Software Developer "}
          </Typography> 
          based in Pretoria, South Africa. 
          I offer a strong foundation in software development and programming 
          </Typography> <br/>
          <Typography variant="p" color="white" textAlign={"start"} padding={"2%"} sx={{fontFamily: `Ubuntu, sans-serif`}}>
                principles across
                
            <Typography variant="p" color="#308fe8" textAlign={"start"} sx={{fontFamily: `Ubuntu, sans-serif`}}>
           {"  multiple platforms "}
          </Typography> 
                . I have good communication and interpersonal skills which allows me to work with ease in
                a 
                <Typography variant="p" color="#308fe8" textAlign={"start"} sx={{fontFamily: `Ubuntu, sans-serif`}}>
           {"  team"}
          </Typography> 
                . 
            </Typography> <br/>
          <Typography variant="p" color="white" textAlign={"start"}></Typography> <br/>
          <Typography variant="p" color="white" textAlign={"start"} padding={"2%"} sx={{fontFamily: `Ubuntu, sans-serif`}}>
          I thrive on challenges, adapt well to changes and work well under pressure. I am
          knowledgeable in technology and writing code to create systems that are 
            </Typography> <br/>
            <Typography variant="p" color="white" textAlign={"start"} padding={"2%"} sx={{fontFamily: `Ubuntu, sans-serif`}}>
            reliable, user-friendly and 
            <Typography variant="p" color="#308fe8" textAlign={"start"} sx={{fontFamily: `Ubuntu, sans-serif`}}>
           {"  reusable"}
          </Typography>.
            </Typography> <br/>
        </TabPanel>
    </Box>
  );
}
