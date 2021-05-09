import { INotificationData } from './INotificationData';


export interface INotificationService {

    publish(data: INotificationData): void;

}