import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import { articleQueries } from '@/modules/article/services';
import { getRequestParams } from '@/utils/get-req-params';

interface Params {
    id: Prisma.ArticleWhereUniqueInput['id'];
    data: Prisma.ArticleUpdateInput;
}

export const updateArticle = async (req: Request, res: Response) => {
    try {
        const { id, data } = getRequestParams<Params>({
            ctx: req,
            params: ['id', 'data'],
        });

        const article = await articleQueries
            .updateArticle({
                where: { id },
                data,
            })
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
