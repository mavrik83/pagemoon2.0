import { User } from '@/lib/models/user';

export interface Article {
    id?: string;
    title?: string;
    body?: string;
    createdAt?: Date;
    updatedAt?: Date;
    user?: User;
    userId?: string;
}
