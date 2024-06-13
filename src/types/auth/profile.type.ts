import { Role } from '@shared/enums';

export type Profile = {
    id: number;
    login: string;
    email: string;
    avatar: string;
    role: Role;
    lastLoginIp: string;
    registrationIp: string;
    lastLoginDate: string;
    registrationDate: string;
};
