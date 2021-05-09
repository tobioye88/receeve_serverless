import { INotificationData } from '../interfaces/INotificationData';


export default class NotificationFactory {
    static createObject(event: string){
        return <INotificationData>{
            Provider: "Mailgun",
            timestamp: (new Date).getTime(),
            type: event
        }
    }
    static getNotification(event: string): INotificationData {
        switch(event){
            case 'accepted':
                return this.createObject(event);
                break;
            case 'rejected':
                return this.createObject(event);
                break;
            case 'delivered':
                return this.createObject(event);
                break;
            case 'failed':
                return this.createObject(event);
                break;
            case 'opened':
                return this.createObject(event);
                break;
            case 'clicked':
                return this.createObject(event);
                break;
            case 'unsubscribed':
                return this.createObject(event);
                break;
            case 'complained':
                return this.createObject(event);
                break;
            case 'stored':
                return this.createObject(event);
                break;
            case 'list_member_uploaded':
                return this.createObject(event);
                break;
            case 'list_member_upload_error':
                return this.createObject(event);
                break;
            case 'list_uploaded':
                return this.createObject(event);
                break;
            
        }
    }
}