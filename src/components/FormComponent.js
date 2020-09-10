import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import axios from "axios";
import Header from './Header';
import FormBuilder from './FormBuilder'
import {getFormStructure} from './formData'

const styles = (theme) => ({
  submit: {
    marginTop: 20,
    backgroundColor:"#FF484F",
  },
  fields:{
    marginTop: 20,
  }
});

class FormComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            subCategories: [],
            topics: [],
        };
    }
    componentDidMount() {
        const token = localStorage.getItem('Token')
        axios.get('http://18.220.240.163:8080/rest/admin/categories', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                const allCategories = res.data.result.list;
                this.setState({
                    categories: allCategories,
                })
            })

        axios.get('http://18.220.240.163:8080/rest/admin/subcategories', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                const allSubCategories = res.data.result.list;
                this.setState({
                    subCategories: allSubCategories,
                })
            })

        axios.get('http://18.220.240.163:8080/rest/admin/topics', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                const allTopics = res.data.result.list;
                this.setState({
                    topics: allTopics,
                })
            })
    }

    onSubmit = (data) =>{
        console.log(data, 'data')
        alert(JSON.stringify(data,null, 2));
    }
  render() {
    const {categories,subCategories,topics} = this.state;
    return (
      <React.Fragment>
        <Header />
        <FormBuilder structure={getFormStructure(categories,subCategories,topics)} onSubmit={this.onSubmit} />
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(FormComponent);
