import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Box from "@material-ui/core/Box";
import LagibetLogo from "../assets/img/logo.png";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import { Redirect } from "react-router-dom";

const styles = (theme) => ({
  submit: {
    marginTop: 20,
    backgroundColor: "#FF484F",
  },
  fields: {
    marginTop: 20,
  },
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      isLoggedIn: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const { history } = this.props;
    const { userName, password } = this.state;
    axios
      .post("http://18.220.240.163:8080/rest/authenticate/login", {
        userName,
        password,
      })
      .then((res) => {
        localStorage.setItem("Token", res.data.result.accessToken);
        // history.push('/form')
      });
    this.setState({ isLoggedIn: true });
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item xs={3} md={3} lg={3}>
              <Box className={classes.logoContainer}>
                <img
                  src={LagibetLogo}
                  alt="Lagibet Logo"
                  style={{ height: 90, marginTop: 20 }}
                />
              </Box>
            </Grid>
            <Grid item xs={9} md={9} lg={9} container justify="center">
              <Box className={classes.paper} m={3}>
                <Typography component="div" variant="h5">
                  Login
                </Typography>
                <Box className={classes.fields}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="userName"
                    value={this.state.userName}
                    onChange={(e) => this.handleChange(e)}
                    variant="outlined"
                  />
                </Box>
                <Box className={classes.fields}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={this.state.password}
                    onChange={(e) => this.handleChange(e)}
                    variant="outlined"
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={this.handleSubmit}
                  className={classes.submit}
                >
                  Login
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {this.state.isLoggedIn ? (
          <Redirect
            to={{
              pathname: "/form",
              state: { user: this.state.userName},
            }}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(LoginPage);
