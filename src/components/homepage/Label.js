import React from "react";
import BrushIcon from "@material-ui/icons/Brush";
import VideocamIcon from "@material-ui/icons/Videocam";
import CameraIcon from "@material-ui/icons/Camera";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5%",
  },
  icons: {
    transform: "scale(3)",
    color: theme.palette.primary.main,
    opacity: "0.7",

    [theme.breakpoints.down("md")]: {
      transform: "scale(3)",
    },
    [theme.breakpoints.down("sm")]: {
      transform: "scale(2)",
    },
    [theme.breakpoints.down("xs")]: {
      transform: "scale(1.2)",
    },
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "space-around",
    padding: "5%",
    background:
      "transparent linear-gradient(133deg, #6469F3 0%, #2228C4 100%) 0% 0% no-repeat padding-box",
    opacity: 1,
  },
}));
function Label() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.iconsContainer}>
        <BrushIcon className={classes.icons} />
        <VideocamIcon className={classes.icons} />
        <CameraIcon className={classes.icons} />
      </div>
    </div>
  );
}

export default Label;
