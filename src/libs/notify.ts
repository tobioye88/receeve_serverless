import * as AWS from 'aws-sdk';
import { INotify } from '../interfaces/INotify';
import { injectable } from "tsyringe";
import { INotificationData } from '../interfaces/INotificationData';


@injectable()
export default class Notify implements INotify {

    publish(data: INotificationData): void {
        AWS.config.update({ region: process.env.AWS_REGION });
        const params = {
            Message: JSON.stringify(data),
            TopicArn: process.env.TOPIC_ARN
        };

        const publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
        publishTextPromise
            .then((data) => {
                console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
                console.log("MessageID is " + data.MessageId);
            }).catch((err) => {
                console.error(err, err.stack);
            });
    }

}