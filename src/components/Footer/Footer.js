import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { Hidden } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    witdh: "100%",
    zIndex: 2,
    position: "relative",
    minHeight: "25vh",
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "#fff",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  socialContainer: {
    position: "absolute",
    bottom: 0,
    padding: "5px",
  },
  icon: {
    width: "3em",
    height: "3em",
    [theme.breakpoints.down("sm")]: {
      width: "2em",
      height: "2em",
    },
  },
}));
export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          justifyContent="center"
          container
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid spacing={2} container direction="column">
              <Grid
                component={Link}
                to="/home"
                onClick={() => props.setValue(0)}
                item
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid spacing={2} container direction="column">
              <Grid
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                component={Link}
                to="/services"
                item
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                component={Link}
                to="/customsoftware"
                item
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                component={Link}
                to="/mobileapp"
                item
                className={classes.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                component={Link}
                to="/website"
                item
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid spacing={2} container direction="column">
              <Grid
                onClick={() => props.setValue(2)}
                component={Link}
                to="/revolution"
                item
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                onClick={() => props.setValue(0)}
                component={Link}
                to="/"
                item
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                onClick={() => props.setValue(0)}
                component={Link}
                to="/"
                item
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                onClick={() => props.setValue(0)}
                component={Link}
                to="/"
                item
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        container
        justifyContent="flex-end"
        className={classes.socialContainer}
      >
        <Grid item>
          <FacebookIcon className={classes.icon} />
        </Grid>
        <Grid item>
          <TwitterIcon className={classes.icon} />
        </Grid>
        <Grid item>
          <InstagramIcon className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
