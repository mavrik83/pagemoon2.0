import { apiRequest } from '@/services/api/config/baseAxios';
import { User } from '@/lib/models/user';

export const fetchUsers = async (): Promise<User[]> => {
    const response = await apiRequest.get<User[]>('/users');
    return response.data;
};

export const fetchUser = async (id: User['id']): Promise<User> => {
    const response = await apiRequest.get<User>(`/users/${id}`);
    return response.data;
};

export const createUser = async (data: User): Promise<User> => {
    const response = await apiRequest.post<User>('/users', data);
    return response.data;
};

export const updateUser = async (data: User): Promise<User> => {
    const response = await apiRequest.put<User>(`/users/${data.id}`, data);
    return response.data;
};

export const deleteUser = async (id: User['id']): Promise<void> => {
    await apiRequest.delete(`/users/${id}`);
};
