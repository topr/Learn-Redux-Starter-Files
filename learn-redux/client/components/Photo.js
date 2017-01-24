import React from 'react';
import { Link } from 'react-router';
import CssTransitionGroup from 'react-addons-css-transition-group';

export default class Photo extends React.Component {

    render() {
        const { index, post, postComments, incrementLikes } = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img className="grid-photo" src={post.display_src} alt={post.caption}/>
                    </Link>
                    <CssTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        <span key={post.likes} className="likes-heart">{post.likes}</span>
                    </CssTransitionGroup>
                </div>

                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button onClick={() => incrementLikes(index)} className="likes">&hearts; {post.likes}</button>
                        <Link className="button" to={`/view/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble"></span>
                                {postComments ? postComments.length : 0}
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        )
    }
};
