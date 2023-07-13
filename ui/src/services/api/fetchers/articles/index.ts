import { apiRequest } from '@/services/api/config/baseAxios';
import { Article } from '@/lib/models/article';

export const fetchArticles = async (): Promise<Article[]> => {
    const response = await apiRequest.get<Article[]>('/articles');
    return response.data;
};

export const fetchArticle = async (id: Article['id']): Promise<Article> => {
    const response = await apiRequest.get<Article>(`/articles/${id}`);
    return response.data;
};

export const createArticle = async (data: Article): Promise<Article> => {
    const response = await apiRequest.post<Article>('/articles', data);
    return response.data;
};

export const updateArticle = async (data: Article): Promise<Article> => {
    const response = await apiRequest.put<Article>(
        `/articles/${data.id}`,
        data,
    );
    return response.data;
};

export const deleteArticle = async (id: Article['id']): Promise<void> => {
    await apiRequest.delete(`/articles/${id}`);
};
