// import { requestFactory } from './requester';

// const baseUrl = 'http://localhost:3030/data/comments';
// const request = requestFactory();

// export const getAll = async (gameId) => {
//     const searchQuery = encodeURIComponent(`gameId="${gameId}"`);
//     const relationQuery = encodeURIComponent(`author=_ownerId:users`);

//     const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
//     const comments = Object.values(result);

//     return comments;
// };

// export const create = async (gameId, comment) => {
//     const result = await request.post(baseUrl, { gameId, comment });

//     return result;
// };
import * as request from './requester'

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export const getAll = async(storyId) => 
{
    const query = encodeURIComponent(`storyId=${storyId}`);
    const result = await request.get(`${baseUrl}?where=${query}`);
    const comments = Object.values(result);
    return comments;
}

export const create = async(data) => {
    const result = await request.post(baseUrl, data);
    const comments = Object.values(result);
    return comments;
} 

