import React, { Component } from "react";
import {
  Avatar,
  Button,
  CSSBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography,
  MenuItem,
  Select,
  withStyles,
} from "@material-ui/core";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import styles from "./Styles/FormStyles";

export class Form extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper>
          <h1>Form!</h1>
          <p>Test</p>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);
