import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import ReactRoundedImage from "react-rounded-image";
import dummy from "../../assets/images/dummy.jpg";
import theme from "../../utils/theme";

const useStyles = makeStyles({
  root: {
    position: "relative",
    marginBottom: "4rem",
  },
  card: {
    borderRadius: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    background: "linear-gradient(to right, #6469F3,#2228C4)"
  },
  title: {
    color: "rgb(235, 235, 238)",
    marginTop: "5rem",
    textAlign: "center",
    textDecoration: "underline",
    display: "table",
    fontSize: "1.5rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  pos: {
      
    color: "rgb(235, 235, 238)",
    display: "table",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "0.75rem",
    marginBottom: 12,
  },
  body: {
    
    color: "rgb(235, 235, 238)",
    display: "table",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "2rem",
    
  },
  content: {
   
    color: "rgb(235, 235, 238)",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto", 
    alignItems: "center",  
  },
  myImg: {
    position: "absolute",
    left: "auto",
    right: "auto",
    top: " -3rem",
    // display: "flex",
    objectFit: "contain",
    zIndex: "10",
    display: "inline",
  },
});

function TestimonialCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <p className={classes.myImg}>
          <ReactRoundedImage
            image={dummy}
            roundedSize="0"
            imageWidth="110"
            imageHeight="110"
          />
        </p>

        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Mr Someone
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            any position
          </Typography>
          <Typography className={classes.body} >
            <p className={classes.content}>
            Recusandae aliquam et totam quae. Vel praesentium velit sed
            quibusdam veritatis eos. Voluptas non cupiditate ut nostrum quia at
            eius dolorem et. Voluptatem eos cum esse sed hic facere nostrum
            aspernatur ratione. 
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default TestimonialCard;
