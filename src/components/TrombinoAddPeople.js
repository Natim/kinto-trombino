import React, { Component } from "react";
import { Link } from "react-router";
import Form from "react-jsonschema-form";


export default class TrombinoAddPage extends Component {
  addPeople(form) {
    console.log(form.formData);
    //this.props.trombinoAddPeople(this.props.server, this.props.bucket, form.formData);
  }
  
  render() {
    const {
      title,
      companies,
      form
    } = this.props;

    if (!form) return <div>Loading</div>;

    form.uiSchema['company'] = {
      "ui:widget": (props) => {
        var onChange = function(event) {
          props.onChange(event.target.value);
        };
        return (
          <div className="input-field col s12">
            <select className="browser-default" id={props.id} label={props.label} defaultValue={props.value} onChange={onChange}>
              <option value="" disabled>Entreprise</option>
              {companies.data.map((company, i) => {
                return <option key={i} value={company.name}>{company.name}</option>;
              })}
            </select>
          </div>
        );
      }
    };
    return (
      <div>
        <h3>{title}</h3>
        <Form schema={form.schema} uiSchema={form.uiSchema} onSubmit={this.addPeople.bind(this)}/>
      </div>
    );
  }
}
