import { INotificationService } from '../interfaces/INotificationService';
import { INotificationData } from '../interfaces/INotificationData';
import { autoInjectable, inject } from 'tsyringe';
import { INotify } from '../interfaces/INotify';

@autoInjectable()
export default class NotificationSystem implements INotificationService {

    constructor(@inject("Notify") private notify?: INotify){}

    publish(data: INotificationData): void {

        this.notify.publish(data);
    }

}