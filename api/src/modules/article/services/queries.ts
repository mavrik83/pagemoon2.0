import { Article, Prisma } from '@prisma/client';
import { prisma } from '@/config/prisma';

type ArticleWithUser = Prisma.ArticleGetPayload<{
    include: { user: true };
}>;

export const findArticle = async (
    articleWhereUniqueInput: Prisma.ArticleWhereUniqueInput,
): Promise<ArticleWithUser | null> =>
    prisma.article.findUnique({
        where: articleWhereUniqueInput,
        include: {
            user: true,
        },
    });

export const findArticles = async (params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ArticleWhereUniqueInput;
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithRelationInput;
    include?: Prisma.ArticleInclude;
}): Promise<ArticleWithUser[]> => {
    const { skip, take, cursor, where, orderBy } = params;
    return prisma.article.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
        include: {
            user: true,
        },
    });
};

export const createArticle = async (
    data: Prisma.ArticleCreateInput,
): Promise<ArticleWithUser> =>
    prisma.article.create({
        data,
        include: {
            user: true,
        },
    });

export const updateArticle = async (params: {
    where: Prisma.ArticleWhereUniqueInput;
    data: Prisma.ArticleUpdateInput;
}): Promise<ArticleWithUser> => {
    const { where, data } = params;
    return prisma.article.update({
        data,
        where,
        include: {
            user: true,
        },
    });
};

export const deleteArticle = async (
    where: Prisma.ArticleWhereUniqueInput,
): Promise<Article> =>
    prisma.article.delete({
        where,
    });
