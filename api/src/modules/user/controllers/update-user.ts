import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import { userQueries } from '@/modules/user/services';
import { getRequestParams } from '@/utils/get-req-params';

interface Params {
    id: Prisma.UserWhereUniqueInput['id'];
    data: Prisma.UserUpdateInput;
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id, data } = getRequestParams<Params>({
            ctx: req,
            params: ['id', 'data'],
        });

        const user = await userQueries
            .updateUser({
                where: { id },
                data,
            })
            .catch((error) => {
                throw new Error(`Error creating user: ${error}`);
            });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error });
    }
};
