const defaultHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': process.env.allowOrigin || '*',
};

export const formatJSONResponse = (
    response: Record<string, unknown>,
    statusCode: number = 200,
    headers?: { [key: string]: string }
) => {
    return {
        statusCode,
        body: JSON.stringify(response),
        headers: {
            ...defaultHeaders,
            ...headers,
        },
    };
};
