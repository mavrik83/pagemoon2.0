/* eslint-disable import/no-extraneous-dependencies */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '@/user/user.module';
import { ArticleModule } from '@/article/article.module';
import { PrismaService } from '@/prisma.service';

@Module({
    imports: [ConfigModule.forRoot(), ArticleModule, UserModule],
    controllers: [],
    providers: [PrismaService],
})
export class AppModule {}
