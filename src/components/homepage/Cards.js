import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import CardComponent from "./CardComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    marginTop: "5%",
    // overflowX: "hidden",
    // overflowY : "hidden",
  },

  itemContainer: {
    // background: "yellow",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",

      '& > .MuiGrid-item': {
        padding: "0",
      },
    },
  },
   item: {
    
  },
  filler: {
    // background: "red",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  startFiller: {
    // background: "red",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  endFiller: {
    // background: "red",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  gridContainer: {

    width: "100%",
   
    // marginLeft: "auto",
    // marginRight: "auto",

    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",
      '& > .MuiGrid-item': {
        paddingBottom: "5rem",
      },
    },
    
  },
}));

function Cards() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
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
          spacing={10}
          alignItems="center"
          justify="center"
          className={classes.itemContainer}
        >
          {/* <Grid item xs={1} className={classes.startFiller}></Grid> */}
          <Grid item xs={10} md={5} className={classes.item}>
            <CardComponent />
          </Grid>
          {/* <Grid item xs={1} className={classes.filler}></Grid> */}
          <Grid item xs={10} md={5} className={classes.item}>
            <CardComponent />
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
          <Grid item xs={10} md={5} className={classes.item}>
            <CardComponent />
          </Grid>
          {/* <Grid item xs={1} className={classes.filler}></Grid> */}
          <Grid item xs={10} md={5} className={classes.item}>
            <CardComponent />
          </Grid>
          {/* <Grid item xs={1} className={classes.endFiller}></Grid> */}
        </Grid>

       
      </Grid>
    </div>
  );
}

export default Cards;
