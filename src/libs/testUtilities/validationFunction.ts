export const isApiGatewayResponse = (response: any) => {
    const { headers, statusCode, body } = response;
    if (!statusCode || !headers || !body) return false;
    if (typeof statusCode !== 'number') return false;
    if (typeof body !== 'string') return false;
    if (!testResponseHeaders(headers)) return false;

    return true;
};

const testResponseHeaders = (headers: any) => {
    if (headers['Content-Type'] !== 'application/json') return false;
    if (headers['Access-Control-Allow-Methods'] !== '*') return false;
    if (!headers['Access-Control-Allow-Origin']) return false;

    return true;
};

const isUUID = () =>
    expect.stringMatching(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g);

export default {
    isApiGatewayResponse,
    isUUID,
};
