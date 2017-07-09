import React from "react";
import "./Popover.scss";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { noteCreate } from "../../actions";

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

  onClick(e) {
    const { note } = this.props;
    this.props.dispatch(noteCreate(note.items));
  }

  render() {
    const { x, y } = this.props.popover.coords;
    const { visible } = this.props.popover;

    const style = {
      left: x,
      top: y
    };

    const className = `popover ${visible ? "active" : ""}`;
    return (
      <div ref="popover" className={className} style={style}>
        <div className="content">
          <a href="#!" onClick={e => this.onClick(e)}>
            <i className="material-icons">mode_edit</i>
          </a>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Popover);
