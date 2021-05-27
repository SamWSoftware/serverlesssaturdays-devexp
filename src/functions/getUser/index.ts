import 'source-map-support/register';

import DynamoHelper from '@libs/dynamoHelper';
import { formatJSONResponse } from '@libs/apiGateway';
import { APIGatewayProxyEvent } from 'aws-lambda';

const main = async (event: APIGatewayProxyEvent) => {
    const userTable = process.env.userTable;
    const userID = event.pathParameters.userID;
    try {
        const user = await DynamoHelper.get({
            hashKey: 'userID',
            hashValue: userID,
            tableName: userTable,
        });

        return user
            ? formatJSONResponse(user)
            : formatJSONResponse({ message: 'no user found' }, 400);
    } catch (error) {
        console.log('error', error);
        return formatJSONResponse({ message: 'no user found' }, 400);
    }
};

export const handler = main;
export default handler;
