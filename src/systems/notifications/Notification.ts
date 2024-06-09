import { NotificationTypes } from '@shared/enums';
import { NotificationDto } from '@shared/types';

export class Notification {
    private static idGenerator: number = 0;

    private readonly id: number;
    private readonly type: NotificationTypes;
    private readonly text: string;
    private readonly title: string;
    private readonly duration: number;

    constructor(type: NotificationTypes, text: string, title: string, duration: number) {
        this.id = Notification.idGenerator++;
        this.type = type;
        this.text = text;
        this.title = title;
        this.duration = duration;
    }

    getDto(): NotificationDto {
        return {
            id: this.id,
            type: this.type,
            title: this.title,
            text: this.text,
            duration: this.duration
        };
    }
}
