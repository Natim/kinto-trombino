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
        <h3>{title ? `«${title}» ` : ""}</h3>
        <ul>
        {people ? people.data.map((person) => {
          return <li><strong>{person.name}</strong></li>;
        }) : ""}
        </ul>
      </div>
    );
  }
}
