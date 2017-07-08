import React from "react";
import "./Post.scss";
import { debounce } from "lodash";
import getSelectionCoords from "../../services/selection";
import Popover from "../Popover/Popover";

export default class Post extends React.Component {
  selectionChange = debounce((e, args) => {
    const coords = getSelectionCoords();
    console.log(coords);
  }, 500);

  componentDidMount() {
    window.document.addEventListener("selectionchange", this.selectionChange);
  }

  componentWillUnmount() {
    window.document.removeEventListener(
      "selectionchange",
      this.selectionChange
    );
  }

  render() {
    const { content, name } = this.props.post;
    const html = {
      __html: content
    };
    return (
      <section ref="post" className="post">
        <h2>
          {name}
        </h2>
        <div dangerouslySetInnerHTML={html} />
        <Popover x={100} y={100} />
      </section>
    );
  }
}
