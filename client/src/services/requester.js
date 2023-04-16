const requester = async (method, token, url, data) => {
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

    // const serializedAuth = localStorage.getItem('auth');
    // if (serializedAuth) {
    //     const auth = JSON.parse(serializedAuth);
        
    //     if (auth.accessToken) {
    //         options.headers = {
    //             ...options.headers,
    //             'X-Authorization': auth.accessToken,
    //         };
    //     }
    // }

    if(token)
    {
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        }
    }

    // 

    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};

export const requestFactory = (token) => {
    return {
        get: requester.bind(null, token, 'GET'),
        post: requester.bind(null, token, 'POST'),
        put: requester.bind(null, token, 'PUT'),
        patch: requester.bind(null, token, 'PATCH'),
        delete: requester.bind(null, token, 'DELETE'),
    }
};
