import React, { Component } from "react";
import { Link } from "react-router";


export default class TrombinoPage extends Component {
  selectOnFocus(e) {
    const target = e.target;
    setTimeout(() => target.select(), 0);
  }

  render() {
    const {
      title,
      displayUrl,
      displayPath,
    } = this.props;
    return (
      <div id="trombino-details">
        <h3>Your trombino {title ? `«${title}» ` : ""}was created!</h3>
        <p>You can now save and share the following links:</p>
        <div className="section">
          <input onFocus={this.selectOnFocus} type="text" value={displayUrl} readOnly="true"/>
          <Link className="btn" target="blank" to={displayPath}>Go</Link>
        </div>
      </div>
    );
  }
}
