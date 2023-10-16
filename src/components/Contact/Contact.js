import React, { useState } from "react";

import { makeStyles, useTheme } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import { TextField, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";

import EmptyBeach from "../../assets/EmityBeach.jpeg";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Contacts.css";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${EmptyBeach})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "50em",
    [theme.breakpoints.down("lg")]: {
      height: "40em",
    },
    [theme.breakpoints.down("md")]: {
      height: "30em",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [helperForm, setHelperForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const formHandler = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    setForm({
      ...form,
      [id]: value,
    });

    if (id === "name") {
      if (value.length < 3) {
        setHelperForm({
          ...helperForm,
          [id]: "The Name must be atleast 3 characters",
        });
      } else {
        setHelperForm({
          ...helperForm,
          [id]: "",
        });
      }
    }
    if (id === "email") {
      if (value.length < 3 || !value.includes("@") || value.includes(" ")) {
        setHelperForm({
          ...helperForm,
          [id]: "The Email is invalid",
        });
      } else {
        setHelperForm({
          ...helperForm,
          [id]: "",
        });
      }
    }
    if (id === "phone") {
      if (value.length < 6) {
        setHelperForm({
          ...helperForm,
          [id]: "The Phone Number is more than 5a digits",
        });
      } else {
        setHelperForm({
          ...helperForm,
          [id]: "",
        });
      }
    }
    if (id === "message") {
      if (value.length < 3) {
        setHelperForm({
          ...helperForm,
          [id]: "The Message must be atleast 3 characters",
        });
      } else {
        setHelperForm({
          ...helperForm,
          [id]: "",
        });
      }
    }
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        lg={3}
        style={{
          marginTop: matchesLG ? "10px" : "0",
          marginBottom: matchesLG ? "10px" : "0",
        }}
      >
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.blue, marginLeft: "10px" }}
          >
            we're Waiting
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          style={{ marginTop: "10px" }}
          spacing={2}
        >
          <Grid item>
            <TextField
              onChange={formHandler}
              value={form.name}
              label="name"
              id="name"
              error={helperForm.name.length !== 0}
              helperText={helperForm.name}
            />
          </Grid>
          <Grid item>
            <TextField
              onChange={formHandler}
              value={form.email}
              label="email"
              id="email"
              error={helperForm.email.length !== 0}
              helperText={helperForm.email}
            />
          </Grid>
          <Grid id="phoneContainer" item>
            <TextField
              type="number"
              onChange={formHandler}
              value={form.phone}
              label="phone"
              id="phone"
              error={helperForm.phone.length !== 0}
              helperText={helperForm.phone}
            />
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: "30px" }}>
          <TextField
            onChange={formHandler}
            value={form.message}
            id="message"
            multiline
            rows={10}
            error={helperForm.message.length !== 0}
            helperText={helperForm.message}
          />
        </Grid>
        <Grid item style={{ marginTop: "10px" }}>
          <Button
            onClick={handleClickOpenDialog}
            disabled={
              form.name.length < 3 ||
              form.message.length < 3 ||
              helperForm.email.length !== 0 ||
              helperForm.phone.length !== 0
            }
            style={{
              borderRadius: "25px",
              borderWidth: "2px",
              borderColor: "#0B72B9",
              marginTop: "40px",
            }}
            variant="outlined"
            endIcon={<TelegramIcon />}
          >
            <span style={{ marginRight: 10 }}>Send Message</span>
          </Button>
        </Grid>
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Confirm Page</DialogTitle>
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDialog}>
            Disagree
          </Button>
          <Button onClick={handleCloseDialog} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Grid item container className={classes.background} lg={9}></Grid>
    </Grid>
  );
}
