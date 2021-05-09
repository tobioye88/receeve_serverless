import type { AWS } from '@serverless/typescript';

import mailGunSchema from './src/schema/mailGunSchema';

const serverlessConfiguration: AWS = {
  service: 'receeve',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      MAIL_GUN_API_KEY: "",
      TOPIC_ARN: "",
      AWS_REGION: "REGION",
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { 
    webhook: {
      handler: `src/functions/webhook/index.main`,
      events: [
        {
          http: {
            method: 'post',
            path: 'webhook',
            request: {
              schema: {
                'application/json': mailGunSchema
              }
            }
          }
        }
      ]
    }
  },
};

module.exports = serverlessConfiguration;
