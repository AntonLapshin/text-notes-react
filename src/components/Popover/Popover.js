import React from "react";
import "./Popover.scss";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Popover extends React.Component {
  static getPreloadedState() {
    return {
      coords: {
        x: 0,
        y: 0
      }
    };
  }

  popover = PropTypes.object.isRequired;

  render() {
    const { x, y } = this.props.popover.coords;
    const { visible } = this.props.popover;

    const style = {
      left: x,
      top: y
    };

    const className = `popover ${visible ? "active" : ""}`;

    return (
      <div className={className} style={style}>
        <div className="content">
          <a href="#!">
            <i className="material-icons">mode_edit</i>
          </a>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Popover);
