import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { Article as ArticleModel, Prisma } from '@prisma/client';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get(':id')
    getArticle(
        @Param('id') id: Prisma.ArticleWhereUniqueInput,
    ): Promise<ArticleModel | null> {
        return this.articleService.article({ id: String(id) });
    }

    @Get()
    getArticles(): Promise<ArticleModel[]> {
        return this.articleService.articles({
            where: { updatedAt: { not: null } },
        });
    }

    @Post()
    createArticle(
        @Body() data: Prisma.ArticleCreateInput,
    ): Promise<ArticleModel> {
        return this.articleService.createArticle(data);
    }

    @Patch(':id')
    updateArticle(
        @Param('id') id: Prisma.ArticleWhereUniqueInput,
        @Body() data: Prisma.ArticleUpdateInput,
    ): Promise<ArticleModel> {
        return this.articleService.updateArticle({
            where: { id: String(id) },
            data,
        });
    }

    @Delete(':id')
    deleteArticle(
        @Param('id') id: Prisma.ArticleWhereUniqueInput,
    ): Promise<ArticleModel> {
        return this.articleService.deleteArticle({ id: String(id) });
    }
}
