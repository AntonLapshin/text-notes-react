import React from "react";
import "./Popover.scss";

export default class Popover extends React.Component {
  render() {
    const { x, y } = this.props;
    const visibility = x !== 0 && y !== 0;

    const style = {
      left: x,
      top: y
    };

    const className = `popover ${visibility ? "active" : ""}`;

    return (
      <div className={className} style={style}>
        <div className="content">
          <a href="#!"><i className="material-icons">mode_edit</i></a>
        </div>
      </div>
    );
  }
}
