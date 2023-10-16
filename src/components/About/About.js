import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    height: "2em",
    width: "2em",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      height: "1em",
      width: "1em",
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  aboutUsContainer: {
    color: "#0B72B9",
  },
  Avatar: {
    height: "10em",
    width: "10em",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      height: "5em",
      width: "5em",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography
          align={matchesSm ? "center" : undefined}
          variant="h2"
          className={classes.aboutUsContainer}
        >
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
      >
        <Typography
          align="center"
          className={classes.missionStatement}
          variant="h4"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab odio
          ipsum consectetur repellendus qui nihil dolor hic accusantium mollitia
          commodi exercitationem expedita, ea ipsam rerum quo rem! Magni, fugit.
        </Typography>
      </Grid>
      <Grid item container className={classes.rowContainer}>
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" gutterBottom style={{ color: "#0B72B9" }}>
              History
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ fontWeight: 700, fontStyle: "italic" }}
            >
              We're the new kid on the block
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates nulla cum aut reprehenderit, doloremque quasi fugiat
              iste sapiente inventore soluta. Quae, facere laborum reprehenderit
              quam nulla vitae? Ipsam, voluptatum error.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates nulla cum aut reprehenderit, doloremque quasi fugiat
              iste sapiente inventore soluta. Quae, facere laborum reprehenderit
              quam nulla vitae? Ipsam, voluptatum error.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates nulla cum aut reprehenderit, doloremque quasi fugiat
              iste sapiente inventore soluta. Quae, facere laborum reprehenderit
              quam nulla vitae? Ipsam, voluptatum error.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates nulla cum aut reprehenderit, doloremque quasi fugiat
              iste sapiente inventore soluta. Quae, facere laborum reprehenderit
              quam nulla vitae? Ipsam, voluptatum error.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent="center" alignItems="center" lg>
          <Typography variant="h1">IMG</Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" className={classes.rowContainer}>
        <Grid item>
          <Typography align="center" variant="h4" style={{ color: "#0B72B9" }}>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Zachary Reece, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding when i was 9 years old,
          </Typography>
        </Grid>
        <Grid item container justifyContent="center">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar className={classes.Avatar} alt="Remy Sharp" src="" />
          </StyledBadge>
        </Grid>
      </Grid>
    </Grid>
  );
}
