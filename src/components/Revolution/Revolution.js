import React, { useState } from "react";
import Lottie from "react-lottie";
import { useTheme, makeStyles } from "@mui/styles";
import { Grid, Typography, IconButton, Button } from "@mui/material";
import animationData from "../../assets/Animation - 1695397902304.json";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you intrested in?",
    subtitle: null,
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "IOS/Android App Development",
        subtitle: null,
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "WebSite Development",
        subtitle: null,
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "select all that apply",
    active: true,
    options: [
      {
        id: 1,
        title: "Web Apllication",
        subtitle: null,
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "IOS Application",
        subtitle: null,
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        selected: false,
        cost: 100,
      },
    ],
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "select all that apply",
    active: false,
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        selected: false,
        cost: 25,
      },
    ],
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "select all that apply",
    active: false,
    options: [
      {
        id: 1,
        title: "User/Authentication",
        subtitle: null,
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        selected: false,
        cost: 25,
      },
    ],
  },
  {
    id: 5,
    title: "what type of custom features do you expect to need?",
    subtitle: "select one",
    active: false,
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: null,
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: null,
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: null,
        selected: false,
        cost: 100,
      },
    ],
  },
  {
    id: 6,
    title: "how many users do you expect?",
    subtitle: "select one",
    active: false,
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        selected: false,
        cost: 1.5,
      },
    ],
  },
];
const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "select one",
    active: true,
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: null,
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: null,
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: null,
        selected: false,
        cost: 250,
      },
    ],
  },
  {},
];
export default function Revolution() {
  const theme = useTheme();
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData,
  };
  const [questions, setQuestions] = useState(softwareQuestions);
  const nextQuestion = () => {
    const newQuestions = JSON.parse(JSON.stringify(questions));
    console.log(newQuestions);

    const currentlyActive = newQuestions.filter((question) => question.active);

    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };

    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };
  const previousQuestion = () => {
    const newQuestions = JSON.parse(JSON.stringify(questions));
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };
  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);

    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    }
    return false;
  };
  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === 1) {
      return true;
    }
    return false;
  };
  return (
    <Grid container direction="row" style={{ padding: "10px ,0" }}>
      <Grid item container direction="column" lg>
        <Grid item>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid item>
          <Lottie height="100%" width="100%" options={defaultOption} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        lg
      >
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Typography variant="h3" align="center">
                  {question.title}
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container marginTop="4em">
                {question.options.map((option) => (
                  <Grid
                    item
                    container
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    md
                    component={Button}
                    style={{ display: "grid", textTransform: "none" }}
                  >
                    <Grid style={{ maxWidth: "14em" }} item>
                      <Typography gutterBottom variant="h6" align="center">
                        {option.title}
                      </Typography>
                      <Typography gutterBottom variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h1">IMG</Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}

        <Grid
          item
          container
          justifyContent="space-between"
          style={{ width: "15em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton
              disabled={navigationPreviousDisabled()}
              onClick={previousQuestion}
              aria-label="back-btn"
            >
              <KeyboardArrowLeftIcon
                style={{
                  color: theme.palette.common.blue,
                  opacity: navigationPreviousDisabled() ? 0.5 : 1,
                }}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={navigationNextDisabled()}
              onClick={nextQuestion}
              aria-label="next-btn"
            >
              <KeyboardArrowRightIcon
                style={{
                  color: theme.palette.common.blue,
                  opacity: navigationNextDisabled() ? 0.5 : 1,
                }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
