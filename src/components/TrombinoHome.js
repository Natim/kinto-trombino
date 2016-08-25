import React, { Component } from "react";
import { Link } from "react-router";


export default class TrombinoHome extends Component {
  selectOnFocus(e) {
    const target = e.target;
    setTimeout(() => target.select(), 0);
  }

  render() {
    const {
      title,
      companies,
      people
    } = this.props;
    return (
      <div id="trombino-details">
        <h3>{title ? `${title}` : ""}</h3>
        {companies ? companies.data.map((company) => {
          let company_logo = "";

          if (company.attachment) {
            company_logo = (
                <a href={company.website ? company.website : "#"}><img src={company.attachment ? company.attachment.location : "#"} /></a>
            );
          }

          return (
            <div className="company">
              {company_logo}
              <h4><a href={company.website ? company.website : "#"}>{company.name}</a></h4>
              <p className="company-description">{company.description}</p>
              {people ? people.data.filter((person) => {
                return person.company == company.name;
              }).map((person) => {
                return (
                  <div className="people">
                    <img src={person.attachment.location}/>
                    <p className="name">{person.name}</p>
                    <p className="role">{person.role}</p>
                    <p className="email"><a href={`mailto:${person.email}`}>E-mail</a></p>
                    <p className="phone"><a href={`tel:${person.phone}`}>{person.phone}</a></p>
                  </div>
                );
              }) : ""}
              <hr className="clear"/>
            </div>);
        }) : ""}
      </div>
    );
  }
}
