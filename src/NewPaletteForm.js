import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import "./styles/NewPaletteForm.css";
import DraggableColorList from "./DraggableColorList";
import { ValidatorForm } from "react-material-ui-form-validator";
import { arrayMoveImmutable } from 'array-move';
import NewPaletteNav from './NewPaletteNav';
import { BiAddToQueue } from 'react-icons/bi';
import ColorPicker from './ColorPicker';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(props) {
  //*****IMPORTED HOOKS*****
  const navigate = useNavigate();
  const theme = useTheme();
  //*****STATES*****
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = useState("#008080");
  const [clrName, setClrName] = useState("");
  const [colorArray, setColorArray] = useState([]);
  const [paletteName, setPaletteName] = useState("");
  // const [choosenEmoji, setChoosenEmoji] = useState("")
  let choosenEmoji;
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleClrNameChange(evt) {
    setClrName(evt.target.value);
  }

  function clearPalette() {
    setColorArray([])
  }

  function addRandomColor() {
    const allColorsArray = props.paletteArray.map(p => p.colors).flat()
    let rand = Math.floor(0 + Math.random() * (((allColorsArray.length) - 0)))
    const randomColor = allColorsArray[rand];
    if (colorArray.every(c => c.name !== randomColor.name)) {
      setColorArray([...colorArray, allColorsArray[rand]])
    }
  }

  const addColor = () => {
    const newColor = {
      color: color,
      name: clrName,
    };
    setColorArray([...colorArray, newColor]);
    setClrName("");
  };

  useEffect(() => {
    // custom rule will have name 'isColorNameUnique'
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      colorArray.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      colorArray.every((c) => c.color !== color)
    );
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      props.paletteArray.every(p => p.paletteName.toLowerCase() !== value.toLowerCase())
    );
  });


  const addEmoji = (Emoji) => {
    choosenEmoji=Emoji
  }

  const savePalette = () => {
    let name = paletteName;
    const newPalette = {
      paletteName: name,
      id: name.toLowerCase().replace(/\s+/g, "-"),
      emoji: choosenEmoji,
      colors: colorArray,
    };
    return (
      props.savePalette(newPalette),
      setPaletteName(""),
      navigate("/")
    );
  };

  function handlePaletteNameChange(evt) {
    setPaletteName(evt.target.value);
  }

  const handleDeleteColor = (newColorArray) => {
    setColorArray(newColorArray);
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColorArray(arrayMoveImmutable(colorArray, oldIndex, newIndex));
  };




  return (
    <Box sx={{ display: "flex" }}>
      <NewPaletteNav open={open} AppBar={AppBar} handleDrawerOpen={handleDrawerOpen} navigate={navigate} savePalette={savePalette} paletteName={paletteName} handlePaletteNameChange={handlePaletteNameChange} colorArray={colorArray} addEmoji={addEmoji} />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            justifyContent: "space-between",
            alignItems: "center",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            style={{ marginLeft: "18rem", alignSelf: "center" }}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <div style={{ marginBottom: "8rem" }}>
          <h1>Design Your Palette</h1>
          <div style={{ margin: "1rem 0" }}>
            <Button variant="contained" style={{ backgroundColor: `${colorArray.length === 0 ? 'grey' : "red"}` }} onClick={clearPalette} disabled={colorArray.length === 0 ? true : false}>
              CLEAR PALETTE
            </Button>
            <Button variant="contained" style={{ backgroundColor: `${colorArray.length === 20 ? 'grey' : "#1976d2"}` }} onClick={addRandomColor} disabled={colorArray.length === 20 ? true : false}>
              RANDOM COLOR
            </Button>
          </div>
          <ColorPicker color={color} setColor={setColor} addColor={addColor} clrName={clrName} handleClrNameChange={handleClrNameChange} colorArray={colorArray} />
        </div>
      </Drawer>

      <Main open={open} className="main" style={{ padding: "0" }}>
        {!open ? <div className="emptyMain-h1"> <h1>ADD COLORS BY CLICKING <BiAddToQueue /> ICON ON THE TOP LEFT</h1></div> : null}
        <DraggableColorList colorArray={colorArray} handleDeleteColor={handleDeleteColor} clrName={clrName} axis="xy" onSortEnd={onSortEnd} />
      </Main>
    </Box>
  );
}