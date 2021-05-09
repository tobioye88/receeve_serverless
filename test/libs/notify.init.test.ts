import "reflect-metadata";
import { container } from 'tsyringe';
import { INotificationService } from '../../src/interfaces/INotificationService';
import { generateNotificationData } from '../generators/util';
import { INotify } from '../../src/interfaces/INotify';
import NotificationSystem from '../../src/libs/notificationSystem';
import { INotificationData } from "../../src/interfaces/INotificationData";
import NotificationFactory from '../../src/libs/notificationFactory';


const fakeNotification = new class FakeNotification implements INotify {
    data: INotificationData;

    publish(data: INotificationData): void {
        this.data = data;
    }
}

container.register("NotificationSystem", { useClass: NotificationSystem });
container.registerInstance("Notify", fakeNotification );

describe("Notification Test", () => {
    it("it should be able to store publish data", () => {
        const storageSystem: INotificationService = container.resolve<INotify>('Notify');

        const fakeData = generateNotificationData();
        storageSystem.publish(fakeData);

        expect(fakeNotification.data.type).toBe(fakeData.type);
    });
});

describe("Notification Factory", () => {
    it("it should be return correct data", () => {
        const eventType: string = "accepted";
        const notificationData: INotificationData = NotificationFactory.getNotification(eventType);

        expect(eventType).toBe(notificationData.type);
    });
});