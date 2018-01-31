import React from 'react';
import Post from "./Post";

export default class BlogList extends React.Component {
    render() {
        return (
            <div>
                {
                   (!this.props.posts || this.props.posts.length === 0) ? (
                    <p> No posts </p>
                   ) :  (
                   this.props.posts.map ((post) => {
                     return <Post post={post} key={post.title} />
                   })
                )
                }
            
            </div>
        );
    };
}