import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import { ChromePicker } from "react-color";
import "./styles/NewPaletteForm.css";
import DraggableColorList from "./DraggableColorList";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {arrayMove} from 'react-sortable-hoc';

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
  const [clrName, setClrName] = useState("teal");
  const [colorArray, setColorArray] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  const [paletteName, setPaletteName] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleClrNameChange(evt) {
    setClrName(evt.target.value);
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
      props.paletteArray.every(p=>p.paletteName.toLowerCase()!==value.toLowerCase())
    );
  });

  const savePalette = () => {
    let name = paletteName;
    const newPalette = {
      paletteName: name,
      id: name.toLowerCase().replace(/\s+/g, "-"),
      emoji: "🍨",
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

  const handleDeleteColor=(newColorArray)=> {
    setColorArray(newColorArray);
  }

  const onSortEnd = ({oldIndex, newIndex}) => {
    setColorArray(arrayMove(colorArray, oldIndex, newIndex));
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="logo-icon-container">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 1, ...(open && { display: "none" }), padding: "15px" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <Link
                to="/"
                className="logo"
                style={{ backgroundColor: "transparent", color: "black" }}
              >
                Color<span className="selector">Selector</span>
              </Link>
            </Typography>
          </div>
          <div className="btn-container">
            <button
              onClick={()=>{navigate('/')}}
              className="custom-btn go-back-btn"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                paddingTop: "1rem",
              }}
            >
              Go Back
            </button>
            <ValidatorForm onSubmit={savePalette}>
              <TextValidator
                label="Palette Name"
                value={paletteName}
                onChange={handlePaletteNameChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "this field is required",
                  "palette name must be unique",
                ]}
              />
              <button
                className="custom-btn save-palette-btn"
                style={{ textDecoration: "none", fontWeight: "bold" }}
                type="submit"
              >
                Save Palette
              </button>
            </ValidatorForm>
          </div>
        </Toolbar>
      </AppBar>

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
            <Button variant="contained" style={{ backgroundColor: "red" }}>
              CLEAR PALETTE
            </Button>
            <Button variant="contained" style={{ backgroundColor: "#1976d2" }}>
              RANDOM COLOR
            </Button>
          </div>

          <ChromePicker
            color={color}
            onChangeComplete={(newColor) => setColor(newColor.hex)}
          />
          <ValidatorForm onSubmit={addColor}>
            <TextValidator
              value={clrName}
              onChange={handleClrNameChange}
              label="Color Name"
              className="clrname-input"
              validators={["required", "isColorNameUnique", "isColorUnique"]}
              errorMessages={[
                "this field is required",
                "color name must be unique",
                "color already used",
              ]}
            />

            <Button
              variant="contained"
              style={{
                width: "80%",
                height: "5rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
                padding: "1rem 0",
                backgroundColor: color,
              }}
              disabled={colorArray.length === 20 ? true : false}
              type="submit"
            >
              {colorArray.length === 20 ? "PALETTE FULL":"ADD COLOR"}
            </Button>
          </ValidatorForm>
        </div>
      </Drawer>

      <Main open={open} className="main" style={{ padding: "0" }}>
        <DraggableColorList colorArray={colorArray} handleDeleteColor={handleDeleteColor} clrName={clrName} axis="xy" onSortEnd={onSortEnd}/>
      </Main>
    </Box>
  );
}