const request = async (method, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }
    }


//     const serializedAuth = localStorage.getItem('auth');
//     if (serializedAuth) {
//         const auth = JSON.parse(serializedAuth);
        
//         if (auth.accessToken) {
//             options.headers = {
//                 ...options.headers,
//                 'X-Authorization': auth.accessToken,
//             };
//         }
//     }

//     const response = await fetch(url, options);

//     if (response.status === 204) {
//         return {};
//     }

//     const result = await response.json();

//     if (!response.ok) {
//         throw result;
//     }

//     return result;
// };

// export const requestFactory = () => {
//     return {
//         get: requester.bind(null, 'GET'),
//         post: requester.bind(null, 'POST'),
//         put: requester.bind(null, 'PUT'),
//         patch: requester.bind(null, 'PATCH'),
//         delete: requester.bind(null, 'DELETE'),
//     }
// };

    const response = await fetch(url,options);
    try{
    const result = await response.json();
    return result;
    }catch(error){
    return {};
    }
}
export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch =  request.bind(null, 'PATCH');
export const del = request.bind(null, 'DELETE');