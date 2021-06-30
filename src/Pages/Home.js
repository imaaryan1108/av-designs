import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import About from "../components/homepage/About";
import Cards from "../components/homepage/Cards";
import Contact from "../components/homepage/Contact";

import Homepage from "../components/homepage/Homepage";
import Label from "../components/homepage/Label";
import Services from "../components/homepage/Services";
import Skills from "../components/homepage/Skills";
import TestimonialCard from "../components/homepage/TestimonialCard";
import Testimonials from "../components/homepage/Testimonials";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceComponent from "../components/homepage/ServiceComponent";
import Navbar from "../components/navbar/Navbar";
import { Route, Switch } from "react-router";

const useStyles = makeStyles((theme) => ({
  projects: {
    margin: "3% auto",
    display: "table",
    padding: "1rem",
    color: "#2228C4",

    fontFamily: "Rany Bold",
    fontSize: "5rem",

    // [theme.breakpoints.down("md")]: {
    //   fontSize: "1.5rem",
    // },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
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
  const viewPortWidth = window.innerWidth;

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const animation = useAnimation();

  useEffect(() => {
    console.log("inView = ", inView);
    if (inView) {
      animation.start({
        scale: 1,
        y: 0,
        opacity: "1",
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      if (viewPortWidth > 960) {
        animation.start({
          scale: 2.8,
          y: "6rem",
          opacity: "0.6",
        });
      }
    }
  }, [inView]);

  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Homepage />
      <motion.div
        animate={animation}
        className={classes.projects}
        id="projects"
      >
        {" "}
        PROJECTS{" "}
      </motion.div>
      <div ref={ref}>
        <Cards />
      </div>
      <Skills />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
