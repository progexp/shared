import { Notification } from './';
import { NotificationTypes } from '@shared/enums';

type Subscriber = () => void;

export class NotificationsManager {
    private static storage = new Map<number, Notification>();
    private static subscribers = new Set<Subscriber>();

    private static notifySubscribers() {
        this.subscribers.forEach((subscriber) => subscriber());
    }

    public static subscribe(subscriber: Subscriber) {
        this.subscribers.add(subscriber);
    }

    public static unsubscribe(subscriber: Subscriber) {
        this.subscribers.delete(subscriber);
    }

    private static send(
        type: NotificationTypes = NotificationTypes.Info,
        text: string,
        title: string,
        duration: number
    ) {
        const notification = new Notification(type, text, title, duration);
        const id = notification.getDto().id;

        this.storage.set(id, notification);
        this.notifySubscribers();

        setTimeout(() => {
            this.remove(id);
        }, duration * 1000);
    }

    public static sendInfo(text: string, title: string = 'Уведомление', duration: number = 5) {
        this.send(NotificationTypes.Info, text, title, duration);
    }

    public static sendError(text: string, title: string = 'Ошибка', duration: number = 5) {
        this.send(NotificationTypes.Error, text, title, duration);
    }

    public static sendWarning(
        text: string,
        title: string = 'Предупреждение',
        duration: number = 5
    ) {
        this.send(NotificationTypes.Warning, text, title, duration);
    }

    public static sendSuccess(text: string, title: string = 'Успешно', duration: number = 5) {
        this.send(NotificationTypes.Success, text, title, duration);
    }

    public static remove(id: number) {
        if (this.storage.has(id)) {
            this.storage.delete(id);
            this.notifySubscribers();
        }
    }

    public static getById(id: number) {
        return this.storage.get(id).getDto();
    }

    public static getAll() {
        return [...this.storage.values()].map((notification) => notification.getDto());
    }
}
