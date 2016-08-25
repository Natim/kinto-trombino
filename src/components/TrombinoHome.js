import React, { Component } from "react";
import { Link } from "react-router";


export default class TrombinoHome extends Component {
  render() {
    const {
      title,
      companies,
      people
    } = this.props;
    return (
      <div id="trombino-details">
        <h3>{title ? `${title}` : ""}</h3>
        {companies ? companies.data.map((company, kc) => {
          let company_logo = "";

          if (company.attachment) {
            company_logo = (
                <a href={company.website ? company.website : "#"}><img src={company.attachment ? company.attachment.location : "#"} /></a>
            );
          }


          return (
              <div className="company" key={kc}>
              {company_logo}
              <h4><a href={company.website ? company.website : "#"}>{company.name}</a></h4>
              <p className="company-description">{company.description}</p>
              {people ? people.data.filter((person) => {
                return person.company == company.name;
              }).map((person, kp) => {
                let website, linkedin, twitter, avatar;
                if (person.attachment) avatar = <img src={person.attachment.location}/>;
                if (person.website) website = <span className="website">— <a href={person.website}>Web</a></span>;
                if (person.linkedin) linkedin = <a href={person.linkedin}>IN</a>;
                if (person.twitter) twitter = (
                  <span className="twitter">— <a href={person.twitter.replace('@', 'https://twitter.com/')}>
                    {person.twitter.replace('https://twitter.com/', '@')}
                  </a></span>
                );
                return (
                    <div className="people" key={kp}>
                    {avatar}
                    <p className="name">{person.name}</p>
                    <p className="role">{person.role}</p>
                    <p className="email"><a href={`mailto:${person.email}`}>E-mail</a></p>
                    <p className="phone"><a href={`tel:${person.phone}`}>{person.phone}</a></p>
                    <p className="social">{linkedin}{twitter}{website}</p>
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
