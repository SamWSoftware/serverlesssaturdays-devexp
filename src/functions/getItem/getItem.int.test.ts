import { v4 as uuid } from 'uuid';

import handler from './index';
import testUtilities from '@libs/testUtilities';

describe('getItem', () => {
    beforeAll(async () => {
        process.env = {
            ...process.env,
            environment: 'dev',
            userTable: 'my-user-table',
        };
    });

    test('first test', async () => {
        const event = testUtilities.eventGenerators.APIGatewayRequest({
            pathParametersObject: {
                itemID: '0002',
            },
            method: 'GET',
        });
        const result = await handler(event);
        const isValidAPIResponse = testUtilities.validation.isApiGatewayResponse(result);
        expect(isValidAPIResponse).toBeTruthy();
        const body = JSON.parse(result.body);
        expect(body).toMatchObject({
            id: '0002',
            type: 'donut',
            name: 'Raised',
            ppu: 0.55,
            batters: {
                batter: [{ id: '1001', type: 'Regular' }],
            },
            topping: [
                { id: '5001', type: 'None' },
                { id: '5002', type: 'Glazed' },
                { id: '5005', type: 'Sugar' },
                { id: '5003', type: 'Chocolate' },
                { id: '5004', type: 'Maple' },
            ],
        });
    });
    test('no item found', async () => {
        const event = testUtilities.eventGenerators.APIGatewayRequest({
            pathParametersObject: {
                itemID: uuid(),
            },
            method: 'GET',
        });
        const result = await handler(event);
        expect(testUtilities.validation.isApiGatewayResponse(result)).toBeTruthy();
        expect(result.statusCode).toBe(400);
        const body = JSON.parse(result.body);
        expect(body).toMatchObject({ message: 'no item found' });
    });
});
