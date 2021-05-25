import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import { APIGatewayProxyEvent } from 'aws-lambda';
import DynamoHelper from '@libs/dynamoHelper';

const main = async (event: APIGatewayProxyEvent) => {
    const userTable = process.env.userTable;
    console.log('userTable', userTable);
    const userID = event.pathParameters.userID;
    try {
        const user = await DynamoHelper.get({
            hashKey: 'userID',
            hashValue: userID,
            tableName: userTable,
        });

        return user
            ? formatJSONResponse(user)
            : formatJSONResponse({ message: 'no user found' }, 404);
    } catch (error) {
        console.log('error', error);
        return formatJSONResponse({ message: 'no user found' }, 404);
    }
};

export const handler = main;
