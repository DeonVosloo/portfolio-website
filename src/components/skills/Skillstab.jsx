import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SkillsRating from './Skillsrating';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Skillstab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
       sx={{ flexGrow: 1, color: 'whitesmoke' ,  bgcolor: '#191b2b', display: 'flex', textAlign: "start" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Skills table"
        sx={{ borderRight: 1, borderColor: 'divider', width: { xs:"50%", md:"30%", lg:"20%"  } }}
      >
        <Tab label="Languages" {...a11yProps(0)} sx={{color: '#c2e9fc', fontFamily: `Ubuntu, sans-serif`}} />
        <Tab label="Frameworks" {...a11yProps(1)} sx={{color: '#c2e9fc', fontFamily: `Ubuntu, sans-serif`}} />
        <Tab label="Software" {...a11yProps(2)} sx={{color: '#c2e9fc', fontFamily: `Ubuntu, sans-serif`}} />
        <Tab label="Libraries" {...a11yProps(3)} sx={{color: '#c2e9fc', fontFamily: `Ubuntu, sans-serif`}} />
        <Tab label="Interpersonal skills" {...a11yProps(4)} sx={{color: '#c2e9fc', fontFamily: `Ubuntu, sans-serif`}} />
      </Tabs>
      <TabPanel value={value} index={0} sx={{fontFamily: `Ubuntu, sans-serif`}}>
        <Grid container spacing={2}>
          
          <Grid item xs={12}>
          <Typography variant="p" color="white">C#, java, SQL  
          <SkillsRating ratingVal={4.5}/>
          </Typography>
      </Grid>

          <Grid item xs={12}>
          <Typography variant="p" color="white">PHP, Javascript, HTML  
          <SkillsRating ratingVal={3.5}/>
          </Typography>

          </Grid>
          <Grid item xs={12}>

          <Typography variant="p" color="white">React.js, PL/SQL, Dart 
          <SkillsRating ratingVal={3}/>
          </Typography>

          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1} sx={{fontFamily: `Ubuntu, sans-serif`}}>

        <Grid container spacing={2}>
        
        <Grid item xs={12}>
        <Typography variant="p" color="white">Flutter  
        <SkillsRating ratingVal={3.5}/></Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography variant="p" color="white">PHP laravel  
        <SkillsRating ratingVal={2}/></Typography>
    </Grid>
    <Grid item xs={12}>
        <Typography variant="p" color="white">Springboot 
        <SkillsRating ratingVal={1.5}/></Typography>
    </Grid>
    <Grid item xs={12}>
        <Typography variant="p" color="white">ASP.NET API's, Entity Framework 
        <SkillsRating ratingVal={4.5}/></Typography>
    </Grid>

        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2} sx={{fontFamily: `Ubuntu, sans-serif`}}>

       <Grid container spacing={2}>
        
        <Grid item xs={12}>
        <Typography variant="p" color="white">Visual Studio, VS Code, Android Studio, Netbeans, SQL Server
        <SkillsRating ratingVal={4.5}/>
        </Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography variant="p" color="white">PHPStorm, Oracle Database, Photoshop  
        <SkillsRating ratingVal={3}/>
        </Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography variant="p" color="white">Github 
        <SkillsRating ratingVal={2.5}/>
        </Typography>
    </Grid>
        </Grid>

      </TabPanel>
      <TabPanel value={value} index={3} sx={{fontFamily: `Ubuntu, sans-serif`}}>

        <Grid container spacing={2}>
        
        <Grid item xs={12}>
        <Typography variant="p" color="white">Material UI  
        <SkillsRating ratingVal={3.5}/>
        </Typography>
        </Grid>

        <Grid item xs={12}>
            <Typography variant="p" color="white">SQFlite, React.js 
            <SkillsRating ratingVal={3}/>
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <Typography variant="p" color="white">OpenCV
            <SkillsRating ratingVal={1.5}/> 
            </Typography>
        </Grid>

        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4} sx={{fontFamily: `Ubuntu, sans-serif`}}>

      <Grid container spacing={2}>

      <Grid item xs={12}>
        <Typography variant="p" color="white">Communication  
          <SkillsRating ratingVal={3.5}/>
        </Typography>
        </Grid> 

        <Grid item xs={12}>
        <Typography variant="p" color="white">Teamwork  
          <SkillsRating ratingVal={4}/>
        </Typography>
        </Grid>  

      </Grid>
      </TabPanel>
      
    </Box>
  );
}
