import React from "react";
import "./Post.scss";

export default prop => {
  const content = {
    __html: prop.content
  };
  return <section className="post" dangerouslySetInnerHTML={content} />;
};
