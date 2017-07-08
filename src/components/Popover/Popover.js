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

  addNote() {
    const sel = window.getSelection();
    const p = sel.anchorNode.parentNode;
    p.contentEditable = true;
    window.document.execCommand("underline");
    p.removeAttribute("contentEditable");
    const u = sel.anchorNode.parentNode;
    const uid = 1;
    u.outerHTML = `<span class="note" data-id="${uid}">${u.innerHTML}</span>`;
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
      <div ref="popover" className={className} style={style}>
        <div className="content">
          <a href="#!" onClick={e => this.addNote()}>
            <i className="material-icons">mode_edit</i>
          </a>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Popover);
