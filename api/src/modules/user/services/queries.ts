import { Prisma } from '@prisma/client';
import { prisma } from '@/config/prisma';

type UserWithArticles = Prisma.UserGetPayload<{
    include: { articles: true };
}>;

export const findUser = async (
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
): Promise<UserWithArticles | null> =>
    prisma.user.findUnique({
        where: userWhereUniqueInput,
        include: {
            articles: true,
        },
    });

export const findUsers = async (params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
    include?: Prisma.UserInclude;
}): Promise<UserWithArticles[]> => {
    const { skip, take, cursor, where, orderBy } = params;
    return prisma.user.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
        include: {
            articles: true,
        },
    });
};

export const createUser = async (data: Prisma.UserCreateInput) =>
    prisma.user.create({
        data,
        include: {
            articles: true,
        },
    });

export const updateUser = async (params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
}) => {
    const { where, data } = params;
    return prisma.user.update({
        data,
        where,
        include: {
            articles: true,
        },
    });
};

export const deleteUser = async (where: Prisma.UserWhereUniqueInput) =>
    prisma.user.delete({
        where,
    });
