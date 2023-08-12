import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import { articleQueries } from '@/modules/article/services';
import { getRequestParams } from '@/utils/get-req-params';

interface Params {
    data: Prisma.ArticleCreateInput;
}

export const addArticle = async (req: Request, res: Response) => {
    try {
        const { data } = getRequestParams<Params>({
            ctx: req,
            params: ['data'],
        });

        const article = await articleQueries
            .createArticle(data)
            .catch((error) => {
                throw new Error(`Error creating article: ${error}`);
            });

        res.status(200).send(article);
    } catch (error) {
        res.status(500).send({ error });
    }
};
