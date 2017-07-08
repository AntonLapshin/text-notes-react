import React, { Component, PropTypes } from "react";
import "./App.scss";
import Blog from "../Blog/Blog";

class App extends Component {
  render() {
    return (
      <section className="app">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              Text notes
            </a>
            <a href="#" data-activates="mobile-nav" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li className="active">
                <a href="javascript:void(0)">Blog</a>
              </li>
            </ul>
            <ul className="side-nav" id="mobile-nav">
              <li className="active">
                <a href="javascript:void(0)">Blog</a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="content">
          <Blog />
        </section>
      </section>
    );
  }
}

export default App;
