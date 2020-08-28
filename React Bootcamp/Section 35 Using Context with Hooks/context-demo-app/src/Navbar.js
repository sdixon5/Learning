import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Switch,
  withStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Styles/NavBarStyles";
import { ThemeContext } from "./Contexts/ThemeContext";
import { LanguageContext } from "./Contexts/LanguageContext";

const content = {
  english: {
    search: "Search",
    flag: "",
  },
  french: {
    search: "Chercher",
    flag: "",
  },
  spanish: {
    search: "Buscar",
    flag: "",
  },
};

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { classes } = props;
  const { search, flag } = content[language];

  return (
    <div className={classes.root}>
      <AppBar postition="static" color={isDarkMode ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>🏳</span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            App Title
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
