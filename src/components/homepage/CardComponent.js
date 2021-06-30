import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import bg from "../../assets/images/Thumbnail.jpg";
import { pxToVw } from "../../utils/helper";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginBottom: pxToVw(48),
     [theme.breakpoints.down("md")]: {
      
      marginTop: "5%",
      
   },
   "&:hover": {
  
     "& $text": {
       backgroundColor: theme.palette.secondary.main,
       color: "rgb(235, 235, 238)",
       fontStyle: "italic"
     }
   }
  },
  media: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    paddingTop: "56.25%",
    opacity: 1, // 16:9

    "&::before": {
      background: "#2228C4",
      // backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "top ",
      content: '" "',
      display: "block",
      position: "absolute",
      objectFit: "contain",
      left: "0",
      top: "0",
      right: "0",
      bottom: "0",
      width: "100%",
      height: "100%",
      opacity: 0.7,
    },
    "&:hover:before": {
      opacity: 0,
    },
  },
  text: {
    backgroundColor: "rgb(235, 235, 238)",
    position: "absolute",
    left: "-1rem",
    top: "-1rem",
    // display: "flex",
    padding: "1% 4%",
    width: "7rem",
    height: "2.5rem ",
    zIndex: "10",
    display: "inline",

    textAlign: "center",
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily.second,
    fontWeight: "800",
    fontSize: "1.5rem",
    

    // "&:hover": {
    //   backgroundColor: "#2228C4",
    //   color: "rgb(235, 235, 238)",
    // },
  },
}));

export default function CardComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a href = "https://www.behance.net/gallery/120450505/LA-GAMING" target="_blank"> 
      <div>
        <p className={classes.text}>Lord</p>
      </div>
      <Card>
        <CardMedia className={classes.media} image={bg}  />
      </Card>
      </a>  
    </div>
  );
}
