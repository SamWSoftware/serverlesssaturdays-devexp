const functions = {
    hello: {
        handler: `src/functions/hello/handler.main`,
        events: [
            {
                http: {
                    method: 'get',
                    path: 'hello',
                },
            },
        ],
    },
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
};
export default functions;
