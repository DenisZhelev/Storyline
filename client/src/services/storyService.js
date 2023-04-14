//import { requestFactory } from './requester';

// const baseUrl = process.env.NODE_ENV === 'development' 
//     ? 'http://localhost:3030'
//     : 'http://localhost:3030'; // TODO: Add server url when deployed
// const url = `${baseUrl}/data/games`;

// export const storyServiceFactory = (token) => {
//     const request = requestFactory(token);

//     const getAll = async () => {
//         const result = await request.get(url);
//         const games = Object.values(result);
    
//         return games;
//     };
    
//     const getOne = async (gameId) => {
//         const result = await request.get(`${url}/${gameId}`);
    
//         return result;
//     };
    
//     const create = async (gameData) => {
//         const result = await request.post(url, gameData);
    
//         console.log(result);
    
//         return result;
//     };
    
//     const edit = (gameId, data) => request.put(`${url}/${gameId}`, data);

//     const deleteGame = (gameId) => request.delete(`${url}/${gameId}`);


//     return {
//         getAll,
//         getOne,
//         create,
//         edit,
//         delete: deleteGame,
//     };
// }
import * as request  from "./requester";

const baseUrl = "http://localhost:3030/jsonstore/test";

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const storyes = Object.values(result);
    console.log(storyes);
    return storyes;
};
export const getOne = async (storyId) => {
    const result = await request.get(`${baseUrl}/${storyId}`);
    return result;
}

export const create = async (storyData) => {
        console.log (storyData)
        console.log("x")
        const result = await request.post(baseUrl, storyData);
    
        console.log(result);
    
        return result;
    };

    //json Store
    export const addComment = async(storyId,data) => {
        const result = await request.post(`${baseUrl}/${storyId}/comments`);
        return result;
    }