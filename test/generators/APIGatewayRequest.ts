
export interface IRequestEvent {
    body: object;
    method?: string;
    path?: string;
    queryStringObject?: object;
    pathParametersObject?: object;
    stageVariables?: object;
}

export const APIGatewayRequest = (event: IRequestEvent) => {
    const { body, method, path, queryStringObject, pathParametersObject, stageVariables } = event;
    const request = {
        body: body ? JSON.stringify(body) : null,
        headers: {
            "Content-Type": "application/json"
        },
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
        },
        resource: '',
    };
    return request;
};
