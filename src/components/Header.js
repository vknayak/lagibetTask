import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import LagibetLogo from "../assets/img/logo.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Logout from './Logout'
import {Redirect} from 'react-router-dom';

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
  handleLogout = () => {
    localStorage.removeItem('Token')
    return <Redirect to="/login" />;
  };
  render() {
    const { classes } = this.props;
    const { user } = this.props;
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
            <Box>
              <Typography variant="h6" style={{ fontWeight: 100 }}>
                {user}
              </Typography>
              {user && <button onClick={this.handleLogout}>logout</button>}
            </Box>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Header);
