import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { pxToVw } from "../../utils/helper";
import BrushIcon from "@material-ui/icons/Brush";
import VideocamIcon from "@material-ui/icons/Videocam";
import CameraIcon from "@material-ui/icons/Camera";
import ServiceComponent from "./ServiceComponent";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import rooter from "../../assets/images/Rooter, Light, Register@2x_2.png";
import image1 from "../../assets/images/image1.png";
import legend from "../../assets/images/logo_legendaryalliance_LA-full-logo-white.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10%",
    width: "100%",
    flexGrow: 1,

    // overflowX: "hidden",
    // overflowY : "hidden",
  },
  gridContainer: {
    background:
      "transparent linear-gradient(133deg, #6469F3 0%, #2228C4 100%) 0% 0% no-repeat padding-box",
    opacity: 1,
    width: "100%",
    marginTop: "10%",
    paddingTop: "2%",
    paddingBottom: "4%",

    [theme.breakpoints.down("sm")]: {
      paddingBottom: "8%",
    },
  },
  text: {
    color: "rgb(235, 235, 238)",
    fontSize: pxToVw(50),
    fontFamily: theme.typography.fontFamily.third,

    [theme.breakpoints.down("md")]: {
      // fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      // fontSize: "2rem",
      // marginBottom: "2rem",
      fontSize: pxToVw(25),
    },
  },
  itemContainer: {
    // background: "yellow",
    width: "100%",
    paddingBottom: "2%",
    marginLeft: "10%",
    marginRight: "10%",

    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "0",

      "& > .MuiGrid-item": {
        padding: 0,
      },
    },
  },
  icon: {
    color: "rgb(235, 235, 238)",
    transform: "scale(4)",

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
  subText: {
    color: "rgb(235, 235, 238)",
    margin: "10% 0 5% -15%",
    fontSize: pxToVw(25),
    paddingBottom: "2%",

    [theme.breakpoints.down("md")]: {
      margin: "10% 0 5% -15%",
      fontSize: pxToVw(20),
    },

    [theme.breakpoints.down("sm")]: {
      margin: "10% 0 5% -15%",
      fontSize: pxToVw(15),
    },

    [theme.breakpoints.down("xs")]: {
      margin: "10% 0 5% -15%",
      fontSize: pxToVw(10),
    },
  },
  imgServices: {
    marginLeft:"10%",
    marginRight: "10%",

    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.6)",
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",
    }
    
  },
}));

function Services() {
  const viewPortWidth = window.innerWidth;

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      if (viewPortWidth > 960) {
        animation.start({
          scale: 4,
          y: "6rem",
          opacity: 0.6,
        });
      }
    }
  }, [inView]);

  const classes = useStyles();
  return (
    <div ref={ref} className={classes.root}>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="space-around"
        className={classes.gridContainer}
      >
        <Grid
          item
          container
          spacing={0}
          alignItems="center"
          justify="center"
          className={classes.itemContainer}
        >
          <motion.p animate={animation} className={classes.text}>
            SERVICES
          </motion.p>
        </Grid>

        <Grid
          item
          container
          spacing={0}
          alignItems="center"
          justify="space-between"
          className={classes.itemContainer}
        >
          <Grid item xs={12} md={4}>
            <ServiceComponent />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceComponent />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceComponent />
          </Grid>
        </Grid>

        <Grid
          item
          container
          spacing={0}
          alignItems="center"
          justify="space-between"
          className={classes.itemContainer}
        >
          <Grid item xs={12} md={4}>
            <ServiceComponent />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceComponent />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceComponent />
          </Grid>
        </Grid>

        <Grid
          item
          container
          spacing={0}
          alignItems="center"
          justify="space-around"
          className={classes.itemContainer}
        >
          <Grid item xs={12} md={1}>
             <img src={legend} className={classes.imgServices}/>
          </Grid>
          <Grid item xs={12} md={2}>
          <img src={rooter} className={classes.imgServices}/>
          </Grid>
          <Grid item xs={12} md={2}>
           <img src={image1} className={classes.imgServices}/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
