import React, { Component } from "react";
import "./App.scss";
import Blog from "../Blog/Blog";

const $ = window.$;

class App extends Component {
  componentDidMount(){
    $(this.refs.mobileNav).sideNav();
  }

  render() {
    return (
      <section className="app">
        <nav className="indigo lighten-2">
          <div className="nav-wrapper">
            <a className="brand-logo center">Text notes</a>
            <a href="/" ref="mobileNav" data-activates="mobile-nav" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li className="active">
                <a>Blog</a>
              </li>
            </ul>
            <ul className="side-nav" id="mobile-nav">
              <li className="active">
                <a>Blog</a>
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
