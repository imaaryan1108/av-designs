import { Button, Grid, makeStyles, TextField } from "@material-ui/core";

import React, { useEffect } from "react";
import photo from "../../assets/images/Group 11.svg";
import { pxToVw } from "../../utils/helper";
import db from "../../firebase";
import { useState } from "react";
import validation from "./validation";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "7%",
  },
  contactImg: {
    marginTop: "5%",
    width: "20vw",

    [theme.breakpoints.down("sm")]: {
      width: "40vw",
    },
  },
  contactContainer: {
    margin: "5% auto 0   auto",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    width: "35vw",
    alignItems: "center",
    background: "#6469F3 0% 0% no-repeat padding-box",
    boxShadow: "7px 29px 99px #00000029",
    border: "1px solid #70707021",
    borderRadius: "81px",
    opacity: 1,
    paddingTop: "4%",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  forms: {
    width: "80vw",
    display: "flex",
    flexDirection: "column",
  },

  formsInput: {
    width: "100%",
    marginBottom: "2%",
    background:
      "transparent linear-gradient(133deg, #6469F3 0%, #2228C4 100%) 0% 0% no-repeat padding-box",
    opacity: 1,
    border: "none",
    inputSize: "2rem",
    fontSize: "2.5rem",
    borderRadius: "8vh",
    padding: "2% 3% 1% 3%",
    color: theme.palette.primary.main,

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "8%",
    },
  },
  formsIdeaInput: {
    width: "100%",
    marginBottom: "2%",
    background:
      "transparent linear-gradient(133deg, #6469F3 0%, #2228C4 100%) 0% 0% no-repeat padding-box",
    opacity: 1,
    border: "none",
    inputSize: "2rem",
    fontSize: "2.5rem",
    borderRadius: "4vh",
    padding: "2% 3% 1% 3%",
    color: theme.palette.primary.main,

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5%",
    },
  },
  formsContainer: {
    marginTop: "5%",
    display: "flex",
    justifyContent: "space-around",
  },
  errors: {
    color: "red",
    fontFamily: theme.typography.fontFamily.second,
    marginTop: "-2%",
    marginLeft: "2%",
    padding: "3px 0",
  },
  input: {
    "&::placeholder": {
      fontFamily: theme.typography.fontFamily.second,
      letterSpacing: "6px",
      fontSize: pxToVw(20),

      [theme.breakpoints.down("sm")]: {
        fontSize: pxToVw(15),
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: pxToVw(10),
      },
    },
  },
  connectText: {
    fontSize: pxToVw(81),
    marginBottom: pxToVw(7),
    marginTop: "10%",
    marginLeft: "auto",
    marginRight: "auto",

    fontWeight: "900",
    letterSpacing: "1px",
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily.third,
    background:
      "transparent linear-gradient(96deg, #6469F3 0%, #2228C4 100%) 0% 0% no-repeat padding-box",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
      // marginBottom: "-0.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      // marginBottom: "-0.5rem",
    },
  },
  contactIdea: {
    fontSize: pxToVw(35),
    fontFamily: theme.typography.fontFamily.second,
    color: theme.palette.primary.main,
    fontWeight: "800",

    [theme.breakpoints.down("sm")]: {
      fontSize: pxToVw(20),
    },
  },
  submit: {
    width: "15vw",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "2%",
    background:
      "transparent linear-gradient(133deg, #6469F3 0%, #2228C4 100%) 0% 0% no-repeat padding-box",
    opacity: 1,
    border: "none",
    inputSize: "2rem",
    fontSize: pxToVw(30),
    borderRadius: "8vh",

    color: theme.palette.primary.main,

    [theme.breakpoints.down("sm")]: {
      fontSize: pxToVw(10),
    },
  },
}));
function Contact() {
  const classes = useStyles();
  const [values, setValues] = useState({
    fname: "",
    email: "",
    idea: "",
  });

  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [clicked, setClicked] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    if (nameError === true || emailError === true) {
      if (values.fname.length === 0) {
        setNameError(true);
      } else {
        setNameError(false);
      }
      if (values.email.length === 0 || !values.email.includes("@")) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
    if (nameError === true || emailError === true) {
      if (values.fname.length === 0) {
        setNameError(true);
      } else {
        setNameError(false);
      }
      if (values.email.length === 0 || !values.email.includes("@")) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }
    if (nameError === false && emailError === false) {
      db.collection("contacts")
        .add({
          fname: values.fname,
          email: values.email,
          idea: values.idea,
        })
        .then(() => {
          alert("Message has been submitted succesfully 👍");
          setNameError(false);
          setEmailError(false);
        })
        .catch((error) => {
          alert(error.message);
        });

      setValues({
        fname: "",
        email: "",
        idea: "",
      });
    }
  };

  return (
    <div className={classes.root} id="contact">
      <div className={classes.container}>
        <div className={classes.contactContainer}>
          <p className={classes.contactIdea}>BRING YOUR IDEAS </p>
          <p className={classes.contactIdea}> TO LIFE!! </p>

          <img src={photo} className={classes.contactImg} />
        </div>
        <div className={classes.connectText}>
          <p> LET'S CONNECT</p>
        </div>
        <div className={classes.formsContainer}>
          <form className={classes.forms} onSubmit={handleSubmit}>
            <TextField
              placeholder="NAME"
              multiline
              className={classes.formsInput}
              name="fname"
              InputProps={{
                classes: { input: classes.input },
                disableUnderline: true,
              }}
              value={values.fname}
              onChange={handleChange}
            />
            {nameError && clicked && (
              <p className={classes.errors}>Enter a valid Name</p>
            )}
            <TextField
              placeholder="EMAIL"
              multiline
              className={classes.formsInput}
              name="email"
              InputProps={{
                classes: { input: classes.input },
                disableUnderline: true,
              }}
              value={values.email}
              onChange={handleChange}
            />
            {emailError && clicked && (
              <p className={classes.errors}>Enter a valid Email</p>
            )}
            <TextField
              placeholder="YOUR IDEA"
              multiline
              className={classes.formsIdeaInput}
              name="idea"
              rows={8}
              InputProps={{
                classes: { input: classes.input },
                disableUnderline: true,
              }}
              value={values.idea}
              onChange={handleChange}
            />
            <Button type="submit" className={classes.submit}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
