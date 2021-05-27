const functions = {
    getItem: {
        handler: `src/functions/getItem/index.handler`,
        events: [
            {
                http: {
                    method: 'get',
                    path: 'item/{itemID}',
                },
            },
        ],
    },
    getUser: {
        handler: `src/functions/getUser/index.handler`,
        events: [
            {
                http: {
                    method: 'get',
                    path: 'user/{userID}',
                },
            },
        ],
    },
};
export default functions;
