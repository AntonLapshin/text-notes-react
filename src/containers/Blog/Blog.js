import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "./Blog.scss";
import Post from "../../components/Post/Post";
import posts from "../../posts";
import { selectPost } from "../../actions";

class Blog extends React.Component {
  blog = PropTypes.object.isRequired;

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
        <ul>
          {blog.posts.length > 1 && blog.posts.map(p =>
            <li key={p.id}>
              <a
                href="#!"
                onClick={e => {
                  dispatch(selectPost(p.id));
                  e.preventDefault();
                }}
              >
                {p.name}
              </a>
              &nbsp;
            </li>
          )}
        </ul>
        <Post post={blog.posts[blog.selectedId]} />
      </section>
    );
  }
}

export default connect(state => state)(Blog);
