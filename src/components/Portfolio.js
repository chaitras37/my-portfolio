import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/React-springboot-mysql final.png";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Ikshana",
    description: `This project proposes the design of portable AI based - guidance system for blind -Third Eye, which benefits the
    visually impaired community and also helps in their day to day mobility. Third eye provides the visually impaired
    community a new way to visualize the world by explaining them about their surroundings.
    `,
    image: project1,
  },
  {
    name: "Hostel Management System",
    description: `This project aims at developing a system for keeping records and showing information about
    hostel.It will help the hostel officer to be able to manage and provide full information about a student in the hostel, rooms availability, regarding fees and bills
    students are owing. They can also delete, add and edit student and guest records.`,
    image: project2,
  },
  {
    name: "User Renewal System",
    description: `User renewal is web app which is use to see the details of user and complete details of renewal.
    Admin can update, delete, add or view the records of the users and renewal. Admin main page contains Renewal details of every user upto date. So admin can contact use by see those details.`,
    image: project3,
  },
  {
    name: "Tourist Management System",
    description: `A web application where a tourist will pre-book their ticket for the tourist 
    places and states across India. It’s better way of maintaining the tourist 
    booking plan in all one sector. And it’s a faster way of delivering the service to 
    the travelers.`,
    image: project1,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
                  Share
                </Button> */}
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    
  );
};

export default Portfolio;
