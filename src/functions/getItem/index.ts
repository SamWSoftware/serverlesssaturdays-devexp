import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import { APIGatewayProxyEvent } from 'aws-lambda';

const main = async (event: APIGatewayProxyEvent) => {
    const itemID = event.pathParameters.itemID;

    const item = itemData[itemID];

    return item ? formatJSONResponse(item) : formatJSONResponse({ message: 'no item found' }, 404);
};

export const handler = main;

const itemData = {
    '0001': {
        id: '0001',
        type: 'donut',
        name: 'Cake',
        ppu: 0.55,
        batters: {
            batter: [
                { id: '1001', type: 'Regular' },
                { id: '1002', type: 'Chocolate' },
                { id: '1003', type: 'Blueberry' },
                { id: '1004', type: "Devil's Food" },
            ],
        },
        topping: [
            { id: '5001', type: 'None' },
            { id: '5002', type: 'Glazed' },
            { id: '5005', type: 'Sugar' },
            { id: '5007', type: 'Powdered Sugar' },
            { id: '5006', type: 'Chocolate with Sprinkles' },
            { id: '5003', type: 'Chocolate' },
            { id: '5004', type: 'Maple' },
        ],
    },
    '0002': {
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
    },
    '0003': {
        id: '0003',
        type: 'donut',
        name: 'Old Fashioned',
        ppu: 0.55,
        batters: {
            batter: [
                { id: '1001', type: 'Regular' },
                { id: '1002', type: 'Chocolate' },
            ],
        },
        topping: [
            { id: '5001', type: 'None' },
            { id: '5002', type: 'Glazed' },
            { id: '5003', type: 'Chocolate' },
            { id: '5004', type: 'Maple' },
        ],
    },
};
