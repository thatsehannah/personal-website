import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import axios from "axios";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import SendIcon from "@material-ui/icons/Send";

import { useStyles } from "./styles";

const Contact = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackBar, setSnackBar] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const onBlur = (event) => {
    let valid;

    switch (event.target.id) {
      case "email-field":
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

        if (!valid) {
          setEmailValid("Invalid email address");
        } else {
          setEmailValid("");
        }
        break;
      case "phone-field":
        if (phone.length > 0) {
          valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
            phone
          );

          if (!valid) {
            setPhoneValid("Invalid phone number");
          } else {
            setPhoneValid("");
          }
        } else {
          setPhoneValid("");
        }
        break;
      default:
        break;
    }
  };

  const clearFormItems = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const onSendMessage = () => {
    setLoading(true);
    axios
      .get(
        "https://us-central1-personal-website-ehannah.cloudfunctions.net/sendMail",
        {
          params: {
            name: name.trimEnd(),
            email: email.trimEnd(),
            phone: phone ? phone.trimEnd() : "No phone number provided.",
            message: message.trimEnd(),
          },
        }
      )
      .then((res) => {
        setLoading(false);
        clearFormItems();
        setSnackBar({
          open: true,
          message: res.data,
          backgroundColor: "#4bb548",
        });
      })
      .catch((err) => {
        setLoading(false);
        clearFormItems();
        setSnackBar({
          open: true,
          message: "Something went wrong, please try again!",
          backgroundColor: "#ff3232",
        });
      });
  };

  const sendButtonContent = (
    <>
      <span style={{ marginRight: "0.5em" }}>Send Message</span>
      <SendIcon />
    </>
  );

  return (
    <LazyLoad offset={150}>
      <Grid container justify="center" className={classes.contactSection}>
        <Grid
          item
          xl={5}
          lg={5}
          style={{
            marginTop: "1em",
            marginBottom: matchesMD ? "2.5em" : undefined,
          }}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            style={{ width: matchesSM ? "100%" : "auto" }}
          >
            <Grid item style={{ width: "90%" }}>
              <Typography
                align="center"
                variant="h6"
                gutterBottom
                className={classes.statement}
              >
                Want to say hey? Send me a message via email or this form if
                you'd like to get in contact with me. I'd love to hear from you!{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Grid item container style={{ marginTop: "1.3em" }}>
                <Grid item>
                  <MailOutlineIcon className={classes.mailIcon} />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    align="center"
                    component={"a"}
                    href="mailto:elliotchannah@outlook.com"
                    target="_blank"
                    className={classes.email}
                  >
                    elliotchannah@outlook.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ width: "90%" }}>
              <Grid
                container
                style={{ width: "100%", marginTop: "2em" }}
                direction="column"
                alignItems="center"
              >
                <Grid container item justify="center">
                  <TextField
                    fullWidth={matchesSM}
                    className={classes.textField}
                    label="Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{
                      classes: {
                        root: classes.inputLabel,
                        focused: "focused",
                        shrink: "shrink",
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.fieldset,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    variant="outlined"
                    id="name-field"
                  />
                </Grid>
                <Grid container item justify="center">
                  <TextField
                    id="email-field"
                    fullWidth={matchesSM}
                    className={classes.textField}
                    label="Email*"
                    error={emailValid.length !== 0}
                    helperText={emailValid}
                    value={email}
                    onBlur={onBlur}
                    onChange={(e) => setEmail(e.target.value)}
                    InputLabelProps={{
                      classes: {
                        root: classes.inputLabel,
                        error: classes.inputLabelError,
                        focused: "focused",
                        shrink: "shrink",
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.fieldset,
                        notchedOutline: classes.notchedOutline,
                        error: classes.fieldsetError,
                      },
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid container item justify="center">
                  <TextField
                    id="phone-field"
                    fullWidth={matchesSM}
                    className={classes.textField}
                    label="Phone"
                    error={phoneValid.length !== 0}
                    helperText={phoneValid}
                    value={phone}
                    onBlur={onBlur}
                    onChange={(e) => setPhone(e.target.value)}
                    InputLabelProps={{
                      classes: {
                        root: classes.inputLabel,
                        error: classes.inputLabelError,
                        focused: "focused",
                        shrink: "shrink",
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.fieldset,
                        notchedOutline: classes.notchedOutline,
                        error: classes.fieldsetError,
                      },
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  container
                  item
                  style={{ marginTop: "2.6em" }}
                  justify="center"
                >
                  <TextField
                    fullWidth={matchesSM}
                    className={classes.textField}
                    label="Message*"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    InputLabelProps={{
                      classes: {
                        root: classes.inputLabel,
                        focused: "focused",
                        shrink: "shrink",
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.fieldset,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    multiline
                    rows={12}
                    variant="outlined"
                    id="message-field"
                  />
                </Grid>
                <Grid
                  item
                  container
                  justify="center"
                  style={{ marginBottom: "2em" }}
                >
                  <Button
                    variant="contained"
                    disabled={
                      name.length === 0 ||
                      email.length === 0 ||
                      emailValid.length !== 0 ||
                      phoneValid.length !== 0 ||
                      message.length === 0
                    }
                    className={classes.button}
                    onClick={onSendMessage}
                  >
                    {loading ? (
                      <CircularProgress className={classes.circularProgress} />
                    ) : (
                      sendButtonContent
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item xl={7} lg={7}>
            <Grid container className={classes.contactBg} />
          </Grid>
        </Hidden>
        <Snackbar
          open={snackBar.open}
          message={snackBar.message}
          ContentProps={{
            style: { backgroundColor: snackBar.backgroundColor },
          }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() => setSnackBar({ ...snackBar, open: false })}
          autoHideDuration={4500}
        />
      </Grid>
    </LazyLoad>
  );
};

export default Contact;
