import React, { Component } from "react";
import { Link } from "react-router";
import Form from "react-jsonschema-form";


export default class TrombinoAddPage extends Component {
  addPeople(form) {
    console.log(form.formData);
    this.props.trombinoAddPeople(this.props.server, this.props.bucket, form.formData);
  }
  
  render() {
    const {
      title,
      companies,
      form
    } = this.props;

    if (!form) return <div>Loading</div>;

    return (
      <div>
        <h3>{title}</h3>
        <Form schema={form.schema} uiSchema={form.uiSchema} onSubmit={this.addPeople.bind(this)}/>
      </div>
    );
  }
}
