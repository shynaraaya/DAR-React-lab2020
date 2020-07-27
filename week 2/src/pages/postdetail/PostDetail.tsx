import React, {useEffect, useState} from "react";
import { Post } from "../../types/interfaces";

import "./PostDetail.scss";
import { getPost } from "../../services/api";


export const PostDetail = ({id}: {id: number}) => {

    const [ post, setPost ] = useState<Post>();


    useEffect( () => {
        getPost(id)
            .then((response) => {
                console.log(response);
                setPost(response)
            })
    }, [id]);


    return (
        <div className="PostDetail">
            <div className="post-detail">
            {   post ?
                <article className="post-detail-body">
                    <h2>id: { post.id }</h2>
                    <h2>title: { post.title }</h2>
                    <div className="post-detail-body">{ post.body }</div>
                </article>
                : null
            }
            </div>
        </div>

    );



};
