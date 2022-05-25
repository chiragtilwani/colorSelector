import * as React from 'react';
import { useState,useEffect } from 'react';
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
import './styles/NewPaletteForm.css'
import DraggableColorBox from './DraggableColorBox'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

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

  const [color,setColor]=useState('#008080')
  const [clrName, setClrName] = useState('teal')
  const [colorArray, setColorArray] = useState([])
  
  function handleClrNameChange(evt) {
    evt.preventDefault();
    setClrName(evt.target.value);
    // setColorNameArray([...colorNameArray,clrName])
    // console.log(clrName)
    // console.log(colorNameArray)
  }

  const addColor = () => {
    const newColor={
      color:color,
      name:clrName
    }
    setColorArray([...colorArray, newColor])
    setClrName("")
  }


  useEffect(()=>{
    // custom rule will have name 'isColorNameUnique'
    ValidatorForm.addValidationRule("isColorNameUnique", value => 
        colorArray.every(({name})=>name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("isColorUnique", value => 
        colorArray.every(c=>c.color !== color)
    );
})

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
            alignItems: 'center',
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

          <ChromePicker color={color} onChangeComplete={(newColor) => setColor(newColor.hex)} />
          <ValidatorForm onSubmit={addColor}>
            <TextValidator
              value={clrName}
              onChange={handleClrNameChange}
              label="Color Name"
              className="clrname-input"
              validators={['required','isColorNameUnique','isColorUnique']}
              errorMessages={['this field is required','color name must be unique','color already used']}
            />
            {/* {colorNameArray.forEach(Name=>Name.toLowerCase() !==clrName.toLowerCase() ? null:{errorText})} */}
            <Button variant="contained" style={{ width: '80%', height: '5rem', fontWeight: 'bold', fontSize: '1.5rem', padding: '1rem 0', backgroundColor: color }}  disabled={colorArray.length === 20 ? true : false} type="submit">ADD COLOR</Button>
          </ValidatorForm>
        
        </div>
      </Drawer>

      <Main open={open} className="main" style={{ padding: '0' }}>
        {colorArray.map(c =>
          <DraggableColorBox className="main-div" bgclr={c.color} clrName={clrName} key={c.color}/>
        )}
      </Main>

    </Box>
  );
}
