import { Request, Response } from 'express';
import { articleQueries } from '@/modules/article/services';

export const getArticles = async (req: Request, res: Response) => {
    try {
        const articles = await articleQueries
            .findArticles({})
            .catch((error) => {
                throw new Error(`Error fetching Articles: ${error}`);
            });

        if (!articles) {
            throw new Error(`Articles not found`);
        }

        res.status(200).send(articles);
    } catch (error) {
        res.status(500).send(`${error}`);
    }
};
