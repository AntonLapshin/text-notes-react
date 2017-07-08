import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "./Blog.scss";
import Post from "../../components/Post/Post";
import posts from "../../posts";
import { selectPost } from "../../actions";

class BlogClass extends React.Component {
  blog = PropTypes.object.isRequired

  static getPreloadedState() {
    return {
      posts,
      selectedId: 0
    };
  }

  render() {
    const { blog, dispatch } = this.props;
    return (
      <section className="blog">
        <section className="content">
          <Post content={blog.posts[blog.selectedId].content} />
        </section>
      </section>
    );
  }
}

const Blog = connect(
  state => {
    return state;
  }
)(BlogClass);

export default Blog;
