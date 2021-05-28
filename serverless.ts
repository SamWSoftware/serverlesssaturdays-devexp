import type { AWS } from '@serverless/typescript';

import functions from 'src/serverless/functions';

const serverlessConfiguration: AWS = {
    service: 'serverless-test',
    frameworkVersion: '2',
    custom: {
        webpack: {
            webpackConfig: './webpack.config.js',
            includeModules: true,
        },
    },
    plugins: ['serverless-webpack', 'serverless-offline'],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        profile: 'serverlessUser-sws',
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
        lambdaHashingVersion: '20201221',
    },
    // import the function via paths
    functions,
};

module.exports = serverlessConfiguration;
