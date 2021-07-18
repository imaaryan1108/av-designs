import React, { useEffect } from "react";
import { Search } from "@material-ui/icons";
import logo from "../../assets/images/LOGO.svg";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Button, Link } from 'react-scroll';
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import Cards from "../homepage/Cards";
import About from "../homepage/About";

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "5rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "1rem",
    position: "sticky",
    top: "0",
    zIndex: "999",

    background:
      "transparent linear-gradient(133deg, #6469F3 0%, #2228C4 100%) 0% 0% no-repeat padding-box",
    opacity: 1,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  navbarLeft: {
    marginLeft: "0.5rem",
  },
  navbarRight: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: theme.typography.fontFamily.second,
  },

  navbarIcon: {
    marginLeft: "0.5rem",
    color: theme.palette.primary.main,
    fontSize: "1.8rem",
  },

  navMenu: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gridGap: "0.6rem",
    listStyle: "none",
    textAlign: "center",
    width: "60vw",
    justifyContent: "end",
    marginRight: "3%",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100vh",
      position: "absolute",
      top: "95%",
      left: "-100%",
      opacity: "1",
      transition: "all 0.5s ease",
    },
  },

  active: {
    [theme.breakpoints.down("sm")]: {
      background:
        "transparent linear-gradient(133deg, #6469F3 0%, #2228C4 100%) 0% 0% no-repeat padding-box",
      opacity: 1,
      left: "0",
      top: "95%",
      opacity: "1",
      transition: "all 0.5s ease",
      zIndex: "1",
    },
  },

  navItem: {
    height: "5rem",

    padding: "1% 20%",
  },

  navLinks: {
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    padding: "1% 10%",

    height: "100%",
    transition: "all 0.2s ease-out",
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer"
    },

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: "15% ",
      width: "100%",
      display: "table",
    },
  },

  navbarLogo: {
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.7)",
      position: "absolute",
      top: "16%",
      left: "5%",
    },
    [theme.breakpoints.down("xs")]: {
      top: "6%",
      left: "5%",
    },
  },
  navMenuIcon: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "absolute",
      top: "20%",
      right: "5%",

      fontSize: "1.8rem",
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      top: "8%",
      right: "5%",
    },
  },
  menuNotClicked: {
    marginTop: "25%",
    color: theme.palette.primary.main,
    fontSize: "2rem",
  },
  menuCLicked: {
    color: theme.palette.primary.main,
  },
}));

function Navbar() {
  const view = useSelector((state) => state.view);

  const animation = useAnimation();

  useEffect(() => {
    if (view) {
      animation.start({
        rotate: 180,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      });
    } else {
      animation.start({
        rotate: 360,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      });
    }
  }, [view]);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);


  const fun = () => {
    const el = document.getElementById("about")
    el.scrollIntoView()
  }
  const classes = useStyles();
  return (
    
      <nav className={classes.navbar}>
        <div className={classes.navbarLeft}>
          <motion.div
            animate={animation}
            className={classes.navbarLogo}
            onClick={closeMobileMenu}
          >
            <Link to="home" smooth={true} >
              <img src={logo} />
            </Link>
          </motion.div>
        </div>
        <div className={classes.navbarRight}>
          <div className={classes.navMenuIcon} onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
            {click ? (
              <CloseIcon className={classes.menuCLicked} />
            ) : (
              <MenuIcon className={classes.menuNotClicked} />
            )}
          </div>
          <ul
            className={clsx({
              [classes.navMenu]: true,
              [classes.active]: click,
            })}
          >
            <li className={classes.navItem}>
              <Link
                to="about"
                smooth={true} 
                className={classes.navLinks}
                 onClick={closeMobileMenu}
              >
                About
              </Link>
             
            </li>
            <li className={classes.navItem}>
              <Link 
                to="projects"
                smooth={true} 
                className={classes.navLinks}
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
          </ul>
          {button}
        </div>
       
      </nav>
    
  );
}

export default Navbar;
