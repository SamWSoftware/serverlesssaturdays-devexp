import type { AWS } from '@serverless/typescript';

const DynamoResources: AWS['resources']['Resources'] = {
    TokenTable: {
        Type: 'AWS::DynamoDB::Table',
        DeletionPolicy: 'Retain',
        Properties: {
            TableName: '${self:custom.tables.userTable}',
            AttributeDefinitions: [
                {
                    AttributeName: 'userID',
                    AttributeType: 'S',
                },
            ],
            KeySchema: [
                {
                    AttributeName: 'userID',
                    KeyType: 'HASH',
                },
            ],
            BillingMode: 'PAY_PER_REQUEST',
        },
    },
};

export default DynamoResources;
