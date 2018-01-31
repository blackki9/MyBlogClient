import React from 'react';

const Post = (props) => (
    <div>
      {props.post.title} {props.post.text}
    </div>
);

export default Post;
