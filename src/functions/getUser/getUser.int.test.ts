import { v4 as uuid } from 'uuid';

import handler from './index';
import DynamoHelper from '@libs/dynamoHelper';
import testUtilities from '@libs/testUtilities';

describe('getUser', () => {
    const data = {
        userID: uuid(),
        name: 'Sam',
        age: 27,
        company: 'Complete Coding',
        job: 'Serverless Wizard',
    };

    beforeAll(async () => {
        process.env = {
            ...process.env,
            environment: 'dev',
            userTable: 'my-user-table',
        };

        await DynamoHelper.write({
            tableName: process.env.userTable,
            data,
        });
    });

    test('first test', async () => {
        const event = testUtilities.eventGenerators.APIGatewayRequest({
            pathParametersObject: {
                userID: data.userID,
            },
            method: 'GET',
        });
        const result = await handler(event);
        const isValidAPIResponse = testUtilities.validation.isApiGatewayResponse(result);
        expect(isValidAPIResponse).toBeTruthy();
        const body = JSON.parse(result.body);
        expect(body).toMatchObject(data);
    });
    test('no user found', async () => {
        const event = testUtilities.eventGenerators.APIGatewayRequest({
            pathParametersObject: {
                userID: uuid(),
            },
            method: 'GET',
        });
        const result = await handler(event);
        expect(testUtilities.validation.isApiGatewayResponse(result)).toBeTruthy();
        expect(result.statusCode).toBe(400);
        const body = JSON.parse(result.body);
        expect(body).toMatchObject({ message: 'no user found' });
    });
});
