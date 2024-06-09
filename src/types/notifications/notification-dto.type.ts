import type { NotificationTypes } from '@shared/enums';

export type NotificationDto = {
    id: number;
    type: NotificationTypes;
    title: string;
    text: string;
    duration: number;
};
