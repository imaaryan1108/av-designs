import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ae from "../../assets/images/ae.png";
import ai from "../../assets/images/ai.png";
import pr from "../../assets/images/pr.png";
import ps from "../../assets/images/ps.png";
import sn from "../../assets/images/sn.png";
import xd from "../../assets/images/xd.png";
import { pxToVw } from "../../utils/helper";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10%",
    width: "100%",
    flexGrow: 1,
   
    // overflowX: "hidden",
    // overflowY : "hidden",
  },
  itemContainer: {
    // background: "yellow",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",

      "& > .MuiGrid-item": {
        padding: 0,
      },
    },
  },
  gridContainer: {
    
    background:
      "transparent linear-gradient(133deg, #6469F3 0%, #2228C4 100%) 0% 0% no-repeat padding-box",
    opacity: 1,
    width: "100%",
    marginTop: "10%",
    paddingTop: "5%",
    paddingBottom: "2%",
    // marginLeft: "auto",
    // marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      "& > .MuiGrid-item": {
        paddingBottom: "22%",
      },
    },
  },
  img: {
    width: "95%",
    height: "auto",
    objectFit: "contain",

    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  item: {
    marginBottom: "2.5%",

    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
    },
  },
  text: {
    color: "rgb(235, 235, 238)",
    fontSize: pxToVw(50),
    marginBottom: "5%",

    [theme.breakpoints.down("md")]: {
      // fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      // fontSize: "2rem",
      // marginBottom: "2rem",
    },
  },
}));

function Skills() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        className={classes.gridContainer}
        container
        direction="column"
        spacing={0}
        alignItems="center"
        justify="center"
      >
        <Grid
          item
          container
          spacing={0}
          alignItems="center"
          justify="center"
          className={classes.itemContainer}
        >
          <p className={classes.text}>SKILLS</p>
        </Grid>
        <Grid
          item
          container
          spacing={10}
          alignItems="center"
          justify="center"
          className={classes.itemContainer}
        >
          {/* <Grid item xs={1} className={classes.startFiller}></Grid> */}
          <Grid item xs={11} md={5} className={classes.item}>
            <img className={classes.img} src={ps} />
          </Grid>
          {/* <Grid item xs={1} className={classes.filler}></Grid> */}
          <Grid item xs={11} md={5} className={classes.item}>
            <img className={classes.img} src={sn} />
          </Grid>
          {/* <Grid item xs={1} className={classes.endFiller}></Grid> */}
        </Grid>

        <Grid
          item
          container
          spacing={10}
          alignItems="center"
          justify="center"
          className={classes.itemContainer}
        >
          {/* <Grid item xs={1} className={classes.startFiller}></Grid> */}
          <Grid item xs={11} md={5} className={classes.item}>
            <img className={classes.img} src={ai} />
          </Grid>
          {/* <Grid item xs={1} className={classes.filler}></Grid> */}
          <Grid item xs={11} md={5} className={classes.item}>
            <img className={classes.img} src={pr} />
          </Grid>
          {/* <Grid item xs={1} className={classes.endFiller}></Grid> */}
        </Grid>

        <Grid
          item
          container
          spacing={10}
          alignItems="center"
          justify="center"
          className={classes.itemContainer}
        >
          {/* <Grid item xs={1} className={classes.startFiller}></Grid> */}
          <Grid item xs={11} md={5} className={classes.item}>
            <img className={classes.img} src={ae} />
          </Grid>
          {/* <Grid item xs={1} className={classes.filler}></Grid> */}
          <Grid item xs={11} md={5} className={classes.item}>
            <img className={classes.img} src={xd} />
          </Grid>
          {/* <Grid item xs={1} className={classes.endFiller}></Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Skills;
