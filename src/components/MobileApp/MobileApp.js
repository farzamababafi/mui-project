import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid, Typography, IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Hidden } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    margin: "10px",
    [theme.breakpoints.down("md")]: {
      margin: "0px",
    },
  },
  titleContainer: {
    maxWidth: "30em",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: "100px",
    },
  },
}));

export default function MobileApp(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container>
      <Grid
        item
        container
        justifyContent={matchesMD ? "center" : undefined}
        direction="row"
      >
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/customsoftware"
              style={{
                color: "#0B72B9",
              }}
              onClick={() => {
                props.setSelectedIndex(1);
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#0B72B9" }}
              variant="h2"
            >
              ios/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              facere, architecto beatae ea reiciendis non hic rerum nobis porro
              ad sunt corporis. Optio eveniet similique deleniti aspernatur
              corporis aut adipisci.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/mobileapp"
              style={{ color: "#0B72B9" }}
              onClick={() => {
                props.setSelectedIndex(2);
              }}
            >
              <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
}
