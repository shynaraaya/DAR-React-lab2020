import axios from 'axios';
import { Post, Video } from '../types/interfaces';
import { videosMock } from './mock';

export const getPosts = () => {
    return axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.data);
}

export const getPost = (id: number) => {
    return axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.data);
}

export const getVideos = () => {
    return new Promise<Video[]>((resolve, reject) => {
        resolve(videosMock);
    });
}
