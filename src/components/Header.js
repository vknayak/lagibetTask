import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import LagibetLogo from "../assets/img/logo.png";

const styles = (theme) => ({
  logoContainer: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  logoImg: {
    height: 50,
  },
  lagibetServiceNameContainer: {
    marginLeft: theme.spacing(1),
  },

});

class Header extends Component {

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Box className={classes.logoContainer}>
              <img
                src={LagibetLogo}
                className={classes.logoImg}
                alt="Lagibet Logo"
              />
              <Box className={classes.lagibetServiceNameContainer}>
                <Typography variant="h6" style={{ fontWeight: 100 }}>
                  Lagibet
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Header);
