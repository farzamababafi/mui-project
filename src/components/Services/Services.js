import React from "react";
import { useTheme } from "@mui/styles";
import { Grid, Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Services() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid spacing={10} style={{ padding: "50px" }} container direction="column">
      <Grid item>
        <Grid justifyContent={matchesSM ? "center" : undefined} container>
          <Grid item>
            <Typography style={{ color: "#0B72B9" }} variant="h3">
              Services
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          justifyContent={matchesSM ? "center" : undefined}
          container
          direction="row"
        >
          <Grid item>
            <Typography style={{ color: "#0B72B9" }} variant="h4">
              Custom Software Development
            </Typography>
            <Typography variant="subtitle1">
              Save Energy Save Time Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Compelete digital solutions from investigation to{" "}
              <span>celebration</span>.
            </Typography>
            <Button
              style={{
                borderRadius: "25px",
                borderWidth: "2px",
                borderColor: "#0B72B9",
                marginTop: "40px",
              }}
              variant="outlined"
              endIcon={<ArrowRightAltIcon />}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
            </Button>
          </Grid>
          <Grid item>
            <Typography style={{ marginLeft: "20px" }} variant="h1">
              IMG
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          container
          justifyContent={matchesSM ? "center" : "flex-end"}
          direction="row"
        >
          <Grid item>
            <Typography style={{ color: "#0B72B9" }} variant="h4">
              Custom Software Development
            </Typography>
            <Typography variant="subtitle1">
              Save Energy Save Time Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Compelete digital solutions from investigation to{" "}
              <span>celebration</span>.
            </Typography>
            <Button
              style={{
                borderRadius: "25px",
                borderWidth: "2px",
                borderColor: "#0B72B9",
                marginTop: "40px",
              }}
              variant="outlined"
              endIcon={<ArrowRightAltIcon />}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
            </Button>
          </Grid>

          <Grid item>
            <Typography style={{ marginLeft: "20px" }} variant="h1">
              IMG
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          justifyContent={matchesSM ? "center" : undefined}
          container
          direction="row"
        >
          <Grid item>
            <Typography style={{ color: "#0B72B9" }} variant="h4">
              Custom Software Development
            </Typography>
            <Typography variant="subtitle1">
              Save Energy Save Time Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Compelete digital solutions from investigation to{" "}
              <span>celebration</span>.
            </Typography>
            <Button
              style={{
                borderRadius: "25px",
                borderWidth: "2px",
                borderColor: "#0B72B9",
                marginTop: "40px",
              }}
              variant="outlined"
              endIcon={<ArrowRightAltIcon />}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
            </Button>
          </Grid>
          <Grid item>
            <Typography style={{ marginLeft: "20px" }} variant="h1">
              IMG
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
