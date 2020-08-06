import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Posts.scss';
import { Post } from '../../types/interfaces';

export const Posts: React.FunctionComponent = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            });
    }, []);

    return (
        <div className="Posts">
            <div className="posts-list">
                {
                    posts.map(post => (
                        <article className="posts-item">
                            <Link to={`/posts/${post.id}`}><h3>{post.title}</h3></Link>
                            <div className="post-item-body">{ post.body }</div>
                        </article>
                    ))
                }
            </div>
        </div>
    );
}
