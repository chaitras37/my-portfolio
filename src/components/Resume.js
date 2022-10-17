import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div>
      
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Education
      </Typography>
      <Box component="div" className={classes.timeLine}>
      <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          Diploma in Advance Computing
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          C-DAC ACTS - KP Bangalore
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Completed 6 Month of "Diploma in Advance Computing"
          </Typography>
        </Box>
      
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          Python And Machine Learning
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Inventeron Technology, Bengaluru.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Completed 1 Month of internship on Artificial Intelligence And Machine 
Learning with python project called ― "Credit Card Fraud Detection"
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            web design
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          LetsTech Softwares Pvt. Ltd, Hubli.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Completed 1 Month of internship based on web development project called ― "User Renewal"
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          B.Tech
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Smt Kamala And Sri Venkappa M Agadi College Of Engineering And Technology - [SKSVMACET], Gadag
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Completed BTech specialised in "Computer Science And Enginnering" with "cgpa - 8.1"
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          PUC
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          U R K Science and Commerce College, Gutall
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Completed PUC with "Percentage - 83.66"
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2015
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          SSLC
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          R K English Medium High School, Guttal 
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Completed SSLC with "Percentage  - 90"
          </Typography>
        </Box>
      </Box>
    </Box>
  </div>
  );
};

export default Resume;
