import { Request, Response } from 'express';
import { articleQueries } from '@/modules/article/services';
import { getRequestParams } from '@/utils/get-req-params';

interface Params {
    id: string;
}

export const getArticle = async (req: Request, res: Response) => {
    try {
        const { id } = getRequestParams<Params>({
            ctx: req,
            params: ['id'],
        });

        const article = await articleQueries
            .findArticle({ id })
            .catch((error) => {
                throw new Error(`Error fetching Article: ${error}`);
            });

        if (!article) {
            throw new Error(`Article not found`);
        }

        res.status(200).send(article);
    } catch (error) {
        res.status(500).send(`${error}`);
    }
};
