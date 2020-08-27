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
import { LanguageContext } from "./Contexts/LanguageContext";

const words = {
  english: {
    signIn: "Sign In",
    email: "Email",
    password: "Password",
    remember: "Remember Me",
  },
  french: {
    signIn: "Se Connecter",
    email: "Adresse Electronique",
    password: "Mot de Passe",
    remember: "Souviens-toi De Moi",
  },
  spanish: {
    signIn: "Registrarse",
    email: "Correo Electronico",
    password: "Contrasena",
    remember: "Recuerdame",
  },
};

class Form extends Component {
  static contextType = LanguageContext;
  render() {
    const { language, changeLanguage } = this.context;
    const { classes } = this.props;
    const { email, signIn, password, remember } = words[language];
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutLinedIcon />
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="french">French</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" name="email" autoFocus></Input>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" name="password" autoFocus></Input>
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={remember}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              className={classes.submit}
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);

// TypeError: Cannot read property 'main' of undefined

// 21 | render() {
// 22 |   const { classes } = this.props;
// 23 |   return (
// >24 |     <main className={classes.main}>
// 25 |       <Paper>
// 26 |         <h1>Form!</h1>
// 27 |         <p>Test</p>
