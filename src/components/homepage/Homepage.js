import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import background from "../../assets/images/keyboard2x.png";
import imageBig from "../../assets/images/Group-9@2x-edited.png";
import imageSmall from "../../assets/images/Group-9@2x-edited.png";
import brushes from "../../assets/images/BRUSHES.png";
import { pxToVw } from "../../utils/helper";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { inViewTrue, notInViewTrue } from "./actions";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  header: {
    position: "relative",
    display: "flex",
    background:
      "transparent linear-gradient(133deg, #6469F3 0%, #2228C4 100%) 0% 0% no-repeat padding-box",
    opacity: 1,
    height: "100%",
    paddingBottom: "13%",
    border: "none",
    outline: "none",
    // [theme.breakpoints.down]

    "&::before": {
      backgroundImage: `url(${background})`,
      // height: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "top center",
      content: '" "',
      display: "block",
      position: "absolute",
      objectFit: "contain",
      // left: "0",

      // right: "0",
      // bottom: "0",
      width: "100%",
      height: "100vh",
      opacity: "0.3",
    },

    // opacity: '0.5'
  },
  homepageFirst: {
    // background: "red",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: "6rem",
    marginLeft: "9rem",
    marginRight: "-5%",

    [theme.breakpoints.between("sm", "md")]: {
      marginLeft: "4rem",
      marginRight: "-11%",
    },

    [theme.breakpoints.down("sm")]: {
      marginLeft: "2rem",
    },
  },
  homepageContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  introText: {
    fontSize: pxToVw(81),
    fontWeight: "900",
    letterSpacing: "1px",
    color: "rgb(235, 235, 238)",
    fontFamily: "Rany",
    marginBottom: pxToVw(-40),

    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
      // marginBottom: "-2.5rem",
      marginBottom: pxToVw(-20),
      letterSpacing: "2px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
      // marginBottom: "-1.2rem",
      marginBottom: pxToVw(-20),
      letterSpacing: "2px",
    },
  },
  esportsText: {
    fontSize: pxToVw(81),
    fontWeight: "900",
    letterSpacing: "1px",
    marginBottom: pxToVw(-40),

    color: "rgb(235, 235, 238)",
    // marginBottom: "-3rem",
    fontFamily: "Rany Bold",

    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
      marginBottom: pxToVw(-20),
      letterSpacing: "2px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
      marginBottom: pxToVw(-20),
      letterSpacing: "2px",
    },
  },
  underScore: {
    color: "#2228C4",
    width: "5rem",
    opacity: "1",
  },
  designerText: {
    fontSize: pxToVw(81),
    marginBottom: pxToVw(7),

    fontWeight: "900",
    letterSpacing: "1px",
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily.third,
    background: "linear-gradient(270deg, rgb(235, 235, 238) 0%, #6469F3 100%) ",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

   [theme.breakpoints.up("md")]: {
    "&:hover": {
      fontSize: pxToVw(90),
      transition: "0.3s",
      background:
        "transparent linear-gradient(270deg, #464BD5 0%, #8F92E0 44%, #EBEBEE 100%) 0% 0% no-repeat padding-box",
      opacity: 1,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
   },

    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
      // marginBottom: "-0.8rem",
      letterSpacing: "2px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
      // marginBottom: "-0.5rem",
      letterSpacing: "2px",
    },
  },
  subtitleText: {
    fontSize: pxToVw(20),
    letterSpacing: "1.3px",
    color: "rgb(235, 235, 238)",
    textTransform: "uppercase",
    opacity: "1",
    fontFamily: "Rany",

    [theme.breakpoints.down("sm")]: {
      fontSize: pxToVw(19),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: pxToVw(15),
      marginRight: "4%",
    },
  },
  homepageCta: {
    marginTop: "5%",
    display: "flex",
    // background: "red",
    // justifyContent: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      fontSize: pxToVw(16),
    },
  },
  recentButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    marginRight: "1.5rem",

    border: "2px solid #2228c4",
    fontFamily: "Noto Sans",
    fontSize: pxToVw(15),

    [theme.breakpoints.down("sm")]: {
      fontSize: pxToVw(15),
      marginRight: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: pxToVw(10),
      marginRight: "0.2rem",
    },

    "&:hover": {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      borderRadius: "19px",
      transition: "0.5s",
    },
  },
  contactButton: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    margin: "25px",

    border: "2px solid #2228c4",
    fontFamily: "Noto Sans",
    fontSize: pxToVw(15),
    padding: "1% 2%",
    border: "2px solid #EBEBEE",

    [theme.breakpoints.down("sm")]: {
      fontSize: pxToVw(15),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: pxToVw(10),
    },

    "&:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      borderRadius: "19px",
      transition: "0.5s",
    },
  },

  icon: {
    // background: "yellow",
    margin: "auto",
    objectFit: "contain",
    width: pxToVw(588),
    [theme.breakpoints.down("md")]: {
      transform: "scale(0.7)",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  brushImg: {
    marginTop: "-2%",
    // display: "flex",
    // justifyContent: "flex-start",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      //  transform: "scale(0.5)",
      // marginRight: "auto",
    },
  },
  buttons: {
    //   MuiButton-text {
    //     padding: 6px 8px;
    // }
  },
}));
function Homepage() {
  const [ref, inView] = useInView({
    threshold: 0.8,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (!inView) {
      dispatch(notInViewTrue());
    } else {
      dispatch(inViewTrue());
    }
  }, [inView]);
  const theme = useTheme();

  const classes = useStyles(theme);
  return (
    <div ref={ref} className={classes.root} id="home">
      <div className={classes.header}>
        <div className={classes.homepageFirst}>
          <div>
            <div className={classes.homepageContent}>
              <p className={classes.introText}>I'm a</p>
              <p className={classes.esportsText}>ESPORTS</p>
              <p className={classes.designerText}>DESIGNER</p>{" "}
              <p className={classes.subtitleText}>
                All your designs solutions at one place
              </p>
            </div>
            <div className={classes.homepageCta}>
              <div className={classes.buttons}>
                <Link to="projects" smooth={true}>
                  <Button className={classes.recentButton}>Recent Works</Button>
                </Link>
                <Link to="contact" smooth={true}>
                  <Button className={classes.contactButton}>Contact Me</Button>
                </Link>
              </div>

              <img src={brushes} className={classes.brushImg} />
            </div>
          </div>
        </div>

        {/* <img src={imageBig} className={classes.icon} /> */}
      </div>
    </div>
  );
}

export default Homepage;
