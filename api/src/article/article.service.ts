import { Injectable } from '@nestjs/common';
import { Article, Prisma } from '@prisma/client';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class ArticleService {
    constructor(private prisma: PrismaService) {}

    article = async (
        articleWhereUniqueInput: Prisma.ArticleWhereUniqueInput,
    ): Promise<Article | null> => {
        return this.prisma.article.findUnique({
            where: articleWhereUniqueInput,
        });
    };

    articles = async (params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ArticleWhereUniqueInput;
        where?: Prisma.ArticleWhereInput;
        orderBy?: Prisma.ArticleOrderByWithRelationInput;
    }): Promise<Article[]> => {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.article.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    };

    createArticle = async (
        data: Prisma.ArticleCreateInput,
    ): Promise<Article> => {
        const newArticle = await this.prisma.article.create({
            data,
        });

        return newArticle;
    };

    updateArticle = async (params: {
        where: Prisma.ArticleWhereUniqueInput;
        data: Prisma.ArticleUpdateInput;
    }): Promise<Article> => {
        const { where, data } = params;
        return this.prisma.article.update({
            data,
            where,
        });
    };

    deleteArticle = async (
        where: Prisma.ArticleWhereUniqueInput,
    ): Promise<Article> => {
        await this.prisma.article
            .update({
                where,
                data: {
                    user: {
                        disconnect: true,
                    },
                },
            })
            .catch(() => {
                throw new Error('Article not found');
            });

        return this.prisma.article.delete({
            where,
        });
    };
}
