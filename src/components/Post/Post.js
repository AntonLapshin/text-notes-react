import React from "react";
import "./Post.scss";
import { debounce } from "lodash";
import getSelectionCoords from "../../services/selection";
import Popover from "../Popover/Popover";
import { connect } from "react-redux";
import { selectionChange } from "../../actions";

const getTotalOffset = e => {
  const offset = { x: 0, y: 0 };
  while (e) {
    offset.x += e.offsetLeft;
    offset.y += e.offsetTop;
    e = e.offsetParent;
  }
  return offset;
};

class Post extends React.Component {
  selectionChange = debounce((e, args) => {
    const coords =
      window.getSelection().toString() === ""
        ? null
        : getSelectionCoords();
    if (coords) {
      const totalOffset = getTotalOffset(this.refs.post);
      console.log(coords, totalOffset);
      coords.x = coords.x - totalOffset.x - 22;
      coords.y = coords.y - totalOffset.y - 50 + window.pageYOffset;
    }
    this.dispatch(selectionChange(coords));
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
    this.dispatch = this.props.dispatch;
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
        <Popover />
      </section>
    );
  }
}

export default connect()(Post);
