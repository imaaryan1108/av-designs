import React from "react";
import myPhoto from "../../assets/images/myphotu.png";
import myPhotoBig from "../../assets/images/myphotu@2x.png";
import ReactRoundedImage from "react-rounded-image";
import { makeStyles } from "@material-ui/core";
import { pxToVh, pxToVw } from "../../utils/helper";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
  root: {
    
    marginTop: "2%",
    // height: "100vh",

    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",
   },
    
  },

  aboutImg: {
    //  background: "blue",
    // borderRadius: "100%",
    width: "45vw",
    margin: "7% 5% 10% 0%",
    display: "block",
    transform: "scale(1.3)",
    // objectFit: "contain",
    // boxShadow: "-19px 25px 99px #00000029",

    [theme.breakpoints.down("md")]: {
      
       marginLeft: "auto",
       marginRight: "auto",
    },
  },
  about: {
    position: "relative",
    // background: "red",
    display: "flex",
    color: theme.palette.secondary.main,

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      position: "static",
    },
  },
  aboutText: {
    background: "yellow",
    display: "flex",
    flexDirection: "column",
    margin: "22% 2% 10% 1%",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px soid #707070",
    textAlign: "center",
    padding: "2% 2% 0 2%",
    height: "50vh",
    boxShadow: "20px 20px 1px #EFEFEF",
    fontFamily: theme.typography.fontFamily.second,
    fontSize: "1.5rem",
    fontWeight: "900",

    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
       marginRight: "auto", 
      boxShadow: "none",
      border: "none",
      margin: "3%",
     
      width: "90vw",
      fontSize: "1.5rem",
      
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      
    },
  },
  name: {
    position: "absolute",
    top: "14rem",
    left: "30rem",
    fontSize: pxToVw(40),
    color: "rgb(235, 235, 238)",
    fontFamily: theme.typography.fontFamily.second,
    fontWeight: "800",
    background: "#4A4FE0 0% 0% no-repeat padding-box",
    border: "1px solid #707070",
    opacity: 1,
    padding: "1% 0% 1% 17%",
    zIndex: "-1",
    width: "50vw",
    letterSpacing: "2.5px",

    [theme.breakpoints.down("md")]: { 
       marginLeft: "auto",
       marginRight: "auto",
       position: "static",
       width: "55vw",
       padding: "2%",
       fontSize: pxToVw(17),
       textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      
    }
  },
  info: {
    
 

    [theme.breakpoints.down("md")]: {
      
    },
    
  },
}));

function About() {
 

  const classes = useStyles();
  return (
    <div className={classes.root} id="about">
      <div className={classes.about}>
        <img src={myPhotoBig} className={classes.aboutImg} />
        <p className={classes.name}>ADITYA VISHWAKARMA</p>

        <div className={classes.aboutText}>
          <p >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
