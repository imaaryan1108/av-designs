import { makeStyles } from "@material-ui/core";
import React from "react";
import Cards from "../components/homepage/Cards";

import Homepage from "../components/homepage/Homepage";
import Skills from "../components/homepage/Skills";
import TestimonialCard from "../components/homepage/TestimonialCard";
import Testimonials from "../components/homepage/Testimonials";

const useStyles = makeStyles((theme) => ({
  projects: {
    margin: "10% auto",
    display: "table",
    padding: "1rem",
    color: "#2228C4",
    border: "1px dashed #2228C4",
    fontFamily: "Rany Bold",
    fontSize: "2.5rem",
   

    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    // [theme.breakpoints.down("sm")]: {
    //     fontSize: "1rem",
    // }
  },
  testimonials: {
    marginTop: "5rem",
    display: "table",
    padding: "1rem",
    color: "#2228C4",
    border: "1px dashed #2228C4",
    fontFamily: "Rany Bold",
    fontSize: "2.5rem",
    marginLeft: "auto",
    marginRight: "auto",

    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    // [theme.breakpoints.down("sm")]: {
    //     fontSize: "1rem",
    // }
  },
 
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Homepage />
      <div className={classes.projects}> PROJECTS </div>
      <Cards />
      <Skills />
      <div className={classes.testimonials}> TESTIMONIALS </div>
      <Testimonials/>
    </div>
  );
}

export default Home;
