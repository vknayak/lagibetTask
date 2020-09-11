import React, { Component } from "react";
import { withStyles, Box } from "@material-ui/core";
import axios from "axios";
import Header from "./Header";
import FormBuilder from "./FormBuilder";
import { getFormStructure } from "./formData";
import { CircularProgress } from "@material-ui/core";

const styles = (theme) => ({
  submit: {
    marginTop: 20,
    backgroundColor: "#FF484F",
  },
  fields: {
    marginTop: 20,
  },
});

class FormComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state.user, "kumar");
    this.state = {
      categories: [],
      subCategories: [],
      topics: [],
      loader: true,
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("Token");
    axios
      .get("http://18.220.240.163:8080/rest/admin/categories", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.result.list, "nayak");
        const allCategories = res.data.result.list;
        this.setState({
          categories: allCategories,
        });
      });

    axios
      .get("http://18.220.240.163:8080/rest/admin/subcategories", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const allSubCategories = res.data.result.list;
        this.setState({
          subCategories: allSubCategories,
        });
      });

    axios
      .get("http://18.220.240.163:8080/rest/admin/topics", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const allTopics = res.data.result.list;
        this.setState({
          topics: allTopics,
          loader: false,
        });
      });
  }

  onSubmit = (data) => {
    console.log(data, "data");
    const token = localStorage.getItem("Token");
    axios.post(
      "http://18.220.240.163:8080/rest/admin/matches",
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert(JSON.stringify(data, null, 2));
  };
  render() {
    const { categories, subCategories, topics, loader } = this.state;

    return (
      <React.Fragment>
        <Header user={this.props.location.state.user} />
        {loader ? (
          <Box
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size={100} />
          </Box>
        ) : (
          <FormBuilder
            structure={getFormStructure(categories, subCategories, topics)}
            onSubmit={this.onSubmit}
          />
        )}
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(FormComponent);
