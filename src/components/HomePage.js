import React, { Component } from "react";


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const {title, server, passphrase} = this.props;
    // This will store the temporary values of the form.
    this.state = {title, server, passphrase};
  }

  createTrombino() {
    const {title, server, passphrase} = this.state;
    this.props.createTrombino(title, server, passphrase);
  }

  onChange = (name) => {
    return (event) => {
      this.setState({[name]: event.target.value});
    };
  }

  render() {
    const {title, server} = this.state;
    return (
      <div id="homepage">
        <h1>Trombino</h1>
        <p className="flow-text">Recognize people you are working with.</p>
        <label>Coworking name <input type="text" placeholder="Thabor Coworking" value={title} onChange={this.onChange("title")}/></label>

        <fieldset>
          <legend>Advanced options</legend>
          <label>Server <input type="text" value={server} onChange={this.onChange("server")}/></label>
          <label>Trombino Admin Passphrase <input type="text" placeholder="Admin passphrase" onChange={this.onChange("passphrase")}/></label>
        </fieldset>

        <div className="section center-align">
          <button onClick={this.createTrombino.bind(this)} className="btn-large waves-effect waves-light">Create new
            <i className="material-icons right">add</i>
          </button>
        </div>
      </div>
    );
  }
}
