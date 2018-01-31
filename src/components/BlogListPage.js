import React from 'react';
import BlogList from './BlogList';

export default class BlogListPage extends React.Component {
    render() {
        return (
            <div>
                <BlogList posts={[{
                    title: "test",
                    text: "test description"
                }]} />
            </div>
        );
    }
}