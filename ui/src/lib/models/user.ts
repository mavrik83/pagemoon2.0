import { Article } from '@/lib/models/article';

export interface User {
    id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    isAdmin?: boolean;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
    articles?: Article[];
}
