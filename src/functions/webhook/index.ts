import 'reflect-metadata';
import 'source-map-support/register';
import * as crypto from "crypto";

import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';
import { formatJSONResponse } from '../../libs/apiGateway';
import { middyfy } from '../../libs/lambda';
import { container } from "tsyringe";

import mailGunSchema from '../../schema/mailGunSchema';
import NotificationFactory from '../../libs/notificationFactory';
import { INotificationService } from '../../interfaces/INotificationService';
import NotificationSystem from '../../libs/notificationSystem';
import { IStorageService } from '../../interfaces/IStorageService';
import StorageSystem from '../../libs/storageSystem';
import ResponseHelper from '../../helpers/responseHelper';
import Notify from '../../libs/notify';
import Repository from '../../libs/repository';
import { formatErrorJSONResponse } from '../../libs/apiGateway';


container.register("Notify", { useClass: Notify });
container.register("Repository", { useClass: Repository });

const handler: ValidatedEventAPIGatewayProxyEvent<typeof mailGunSchema> = async (event) => {

  // Validation
  if (process.env.MAIL_GUN_API_KEY == ""){
    const INVALID_API_KEY = 'Invalid API KEY';
    console.log(INVALID_API_KEY);
    return formatErrorJSONResponse(ResponseHelper.error(null, INVALID_API_KEY));
  }
  const value = event.body['event-data'].timestamp + event.body.signature.token;
  const hash = crypto.createHmac('sha256',
              process.env.MAIL_GUN_API_KEY)
                   .update(value)
                   .digest('hex');

  if (hash !== event.body.signature.signature) {
    const INVALID_SIGNATURE = 'Invalid signature';
    console.log(INVALID_SIGNATURE);
    return formatErrorJSONResponse(ResponseHelper.error(null, INVALID_SIGNATURE));
  }

  // Store Raw Webhook
  const storageService: IStorageService = container.resolve(StorageSystem);
  await storageService.save(event.body);

  // Publish to SNS
  const notificationService: INotificationService = container.resolve(NotificationSystem);
  notificationService.publish(NotificationFactory.getNotification(event.body['event-data'].event));

  return formatJSONResponse(ResponseHelper.success(null));
}

export const main = middyfy(handler);