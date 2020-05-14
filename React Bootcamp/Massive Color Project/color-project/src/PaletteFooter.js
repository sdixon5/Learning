import React from "react";
import styles from "./styles/PaletteFooterStyles";
import { withStyles } from "@material-ui/styles";

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <div>
      <footer className={classes.PaletteFooter}>
        {paletteName}
        <span className={classes.Emoji}>{emoji}</span>
      </footer>
    </div>
  );
}

export default withStyles(styles)(PaletteFooter);
