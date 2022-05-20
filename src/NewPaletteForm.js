import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color';
import TextField from '@mui/material/TextField';
import './styles/NewPaletteForm.css'


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [color,setColor]=useState('teal')
  const [colorArray,setColorArray]=useState(['purple','red'])

  const addColor = () =>{
    setColorArray([...colorArray,color.hex])
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link to='/' className="logo" style={{ backgroundColor: 'transparent', color: 'white' }}>Color<span className="selector">Selector</span></Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            justifyContent: 'space-between',
            alignItems: 'center'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{ marginLeft: '18rem', alignSelf: 'center' }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <div style={{ marginBottom: '8rem' }} >
          <h1>Design Your Palette</h1>
          <div style={{ margin: '1rem 0' }}>

            <Button variant="contained" style={{ backgroundColor: 'red' }}>
              CLEAR PALETTE
            </Button>
            <Button variant="contained" style={{ backgroundColor: '#1976d2' }}>
              RANDOM COLOR
            </Button>
          </div>
          <TextField
          
          id="standard-error-helper-text"
          label="Color Name"
          helperText="Incorrect entry."
          variant="standard"
          style={{marginBottom: '2rem'}}
        />
          
          <ChromePicker color={color} onChangeComplete={(newColor) => setColor(newColor)} />
          <Button variant="contained" style={{ width: '80%', height: '5rem', marginTop: '2rem', fontWeight: 'bold', fontSize: '1.5rem', padding: '1rem 0',backgroundColor:color.hex }} onClick={addColor}>ADD COLOR</Button>
        </div>
      </Drawer>

      <Main open={open} className="main">
          {colorArray.map(c=>
            <div className="main-div" style={{backgroundColor:c}}>{c}</div>
          )}
      </Main>
    </Box>
  );
}
