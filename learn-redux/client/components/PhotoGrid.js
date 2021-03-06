import React from 'react';
import Photo from './Photo';
import { Link } from 'react-router';

export default class PhotoGrid extends React.Component {

    render() {
        const { posts, comments } = this.props;
        return (
            <div className="photo-grid">
                {posts.map((post, i) => <Photo key={i} index={i} post={post} postComments={comments[post.code]} {...this.props}/>)}
            </div>
        );
    }
}
