import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import posterImg from "../../assets/images/Group 13.png";
import posterImgBig from "../../assets/images/Group 13@2x.png";
import { pxToVw } from "../../utils/helper";

const useStyles = makeStyles((theme) => ({
  root: {},
  service: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // background: "#EBEBEE 0% 0% no-repeat padding-box",
    marginLeft: "10%",
    marginRight: "10%",
    justifyContent: "space-between",
    padding: "15%",
    margin: "10% auto",

    // [theme.breakpoints.down("sm")]: {
    //   maxWidth: "50vw",
    //   maxHeight: "80vh",
    // },
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        borderRadius: "80px",
        boxShadow: "0px 58px 99px #00000040",
        background: "#EBEBEE 0% 0% no-repeat padding-box",
        transition: "0.5s",

        "& $title": {
          transform: "scale(1.2)",
          transition: "0.5s",
          color: theme.palette.secondary.main,
        },
        "& $imgPoster": {
          transform: "scale(0.7)",
          transition: "0.5s",
        },
        "& $subTitle": {
          marginTop: "10%",
          transform: "scale(1.1)",
          transition: "0.5s",
          color: theme.palette.secondary.main,
        },
        "& $button": {
          background: "none",
          border: "none",
          boxShadow: "none",
          color: theme.palette.secondary.main,
          fontFamily: theme.typography.fontFamily.third,
          transform: "scale(1.3)",
        },
      },
    },
  },
  title: {
    fontFamily: theme.typography.fontFamily.third,
    color: "rgb(235, 235, 238)",
    marginTop: "5%",
    whiteSpace: "no-wrap",

    minWidth: pxToVw(260),
    textAlign: "center",
    fontSize: pxToVw(20),
    [theme.breakpoints.down("sm")]: {
      fontSize: pxToVw(15),
    },
  },
  subTitle: {
    textAlign: "center",
    fontFamily: theme.typography.fontFamily.second,
    color: "rgb(235, 235, 238)",
    margin: "8% auto",
    // maxWidth: "15vw",

    minHeight: pxToVw(230),
    [theme.breakpoints.down("sm")]: {
      marginTop: "15%",
      marginLeft: "0",
      marginRight: "0",
      maxWidth: "100vw",
    },
  },
  button: {
    fontFamily: theme.typography.fontFamily.second,
    background: "#6469F3 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 13px #00000029",
    borderRadius: "61px",
    opacity: 1,
    padding: "5% 10%",
    color: "rgb(235, 235, 238)",
    textShadow: "0px 3px 13px #00000029",
    marginTop: "2%",
    textDecoration: "none",
    "&:hover": {
      background: "#6469F3 0% 0% no-repeat padding-box",
    },
  },
  imgPoster: {
    transform: "scale(0.5)",
  },
}));
function ServiceComponent({ title, content, url, photo }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.service}>
        <img className={classes.imgPoster} src={photo} />

        <p className={classes.title}> {title}</p>
        <p className={classes.subTitle}> {content}</p>

        <a
          href={url}
          target="_blank"
          variant="contained"
          className={classes.button}
        >
          {" "}
          Order Now
        </a>
      </div>
    </div>
  );
}

export default ServiceComponent;
