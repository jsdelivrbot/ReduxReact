import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const customClass = `form-group ${touched && error ? "has-danger" : ""}`

    return (
      <div className={customClass}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-warning">Cancel</Link>
        </form>
      </div>
    )
  }
}

const validate = values => {
  // console.log(values) --> { title: "fasd", categories: "woefsdjlk", content: "asweofj"}
  const errors = {};

  // validate input from values
  if (!values.title) errors.title = "Enter a title";
  if (!values.categories) errors.categories = "Enter a categories";
  if (!values.content) errors.content = "Enter a content";

  // if errors is empty, the form is fine to submit
  // if erros has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostsNew));