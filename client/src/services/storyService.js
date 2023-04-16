import { requestFactory } from './requester';

// const baseUrl = process.env.NODE_ENV === 'development' 
//     ? 'http://localhost:3030'
//     : 'http://localhost:3030'; // TODO: Add server url when deployed
// const url = `${baseUrl}/data/stories`;
const baseUrl = 'http://localhost:3030/data/stories'

export const storyServiceFactory = (token) => {
    console.log(token)
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const stories = Object.values(result);
    
        return stories;
    };  
    
    const getOne = async (storyId) => {
        const result = await request.get(`${baseUrl}/${storyId}`);
    
        return result;
    };
    
    const create = async (storyData) => {
        const result = await request.post(baseUrl, storyData);
    
        console.log(result);
    
        return result;
    };
    
    const edit = (storyId, data) => request.put(`${baseUrl}/${storyId}`, data);

    const deleteStory = (storyId) => request.delete(`${baseUrl}/${storyId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteStory,
    };
}
// import * as request  from "./requester";

// const baseUrl = "http://localhost:3030/data/stories";

// export const getAll = async () => {
//     const result = await request.get(baseUrl);
//     const storyes = Object.values(result);
//     console.log(storyes);
//     return storyes;
// };
// export const getOne = async (storyId) => {
//     const result = await request.get(`${baseUrl}/${storyId}`);
//     return result;
// }

// export const create = async (storyData) => {
//         console.log (storyData)
//         console.log("x")
//         const result = await request.post(baseUrl, storyData);
    
//         console.log(result);
    
//         return result;
//     };

//     //json Store
//     export const addComment = async(storyId,data) => {
//         const result = await request.post(`${baseUrl}/${storyId}/comments`);
//         return result;
//     }