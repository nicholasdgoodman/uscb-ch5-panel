import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import LaptopIcon from '@material-ui/icons/Laptop';
import DescriptionIcon from '@material-ui/icons/Description';
import AppleIcon from '@material-ui/icons/Apple';
import MovieIcon from '@material-ui/icons/Movie';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const tabStyle = {
    width: 240,
    minWidth: 240
}

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const tabs = [
    { label: 'Desktop Computer', icon: <DesktopWindowsIcon />, join: '31' },
    { label: 'Laptop Computer', icon: <LaptopIcon />, join: '32' },
    { label: 'Document Camera', icon: <DescriptionIcon />, join: null },
    { label: 'Apple TV', icon: <AppleIcon />, join: null },
    { label: 'Blu-ray Video', icon: <MovieIcon />, join: null }
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);

    let tab = tabs[newValue];

    if(tab.join) {
      console.log('Triggering digital join', tab.join);
      window.CrComLib.publishEvent('b', tab.join, true);
      window.CrComLib.publishEvent('b', tab.join, false);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="centered"
          centered
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          { tabs.map((tab,n) => <Tab label={tab.label} icon={tab.icon} style={tabStyle} {...a11yProps(n)} key={n} />) }
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </div>
  );
}