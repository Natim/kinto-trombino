import React, { Component } from "react";
import { Link } from "react-router";


export default class App extends Component {
  render() {
    const {
      displayPath,
      content,
    } = this.props;
    return (
      <div>
        <main className="container">
          {content || <p>Default.</p>}
        </main>
        <footer>
          <div className="footer-copyright">
            <div className="container">
        © 2016 Powered by <a href="https://kinto.readthedocs.io">Kinto</a> — <a href="https://github.com/Natim/kinto-trombino">Improve the Trombino</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
