import { APIGatewayProxyEvent } from 'aws-lambda';

const APIGatewayRequest = ({
    body,
    method,
    path = '',
    queryStringObject,
    pathParametersObject,
    stageVariables = null,
}: {
    body?: { [key: string]: any };
    method: string;
    path?: string;
    queryStringObject?: { [key: string]: string };
    pathParametersObject?: { [key: string]: string };
    stageVariables?: { [key: string]: string } | null;
}) => {
    const request: APIGatewayProxyEvent = {
        body: body ? JSON.stringify(body) : null,
        headers: {},
        multiValueHeaders: {},
        httpMethod: method,
        isBase64Encoded: false,
        path,
        pathParameters: pathParametersObject || null,
        queryStringParameters: queryStringObject || null,
        multiValueQueryStringParameters: null,
        stageVariables,
        requestContext: {
            accountId: '',
            apiId: '',
            httpMethod: method,
            identity: {
                accessKey: '',
                accountId: '',
                apiKey: '',
                apiKeyId: '',
                caller: '',
                cognitoAuthenticationProvider: '',
                cognitoAuthenticationType: '',
                cognitoIdentityId: '',
                cognitoIdentityPoolId: '',
                principalOrgId: '',
                sourceIp: '',
                user: '',
                userAgent: '',
                userArn: '',
            },
            path,
            stage: '',
            requestId: '',
            requestTimeEpoch: 3,
            resourceId: '',
            resourcePath: '',
            authorizer: undefined,
            protocol: '',
        },
        resource: '',
    };
    return request;
};

const eventGenerators = {
    APIGatewayRequest,
};

export default eventGenerators;
