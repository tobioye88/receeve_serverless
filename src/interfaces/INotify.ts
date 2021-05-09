import { INotificationData } from './INotificationData';


export interface INotify {

    publish(data: INotificationData): void;

}