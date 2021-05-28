import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';

const hello: ValidatedEventAPIGatewayProxyEvent<any> = async event => {
    return formatJSONResponse({
        message: `Hello , welcome to the exciting Serverless world!`,
        event,
    });
};

export const main = hello;
