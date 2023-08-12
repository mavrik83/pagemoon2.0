import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import { userQueries } from '@/modules/user/services';
import { getRequestParams } from '@/utils/get-req-params';

interface Params {
    data: Prisma.UserCreateInput;
}

export const addUser = async (req: Request, res: Response) => {
    try {
        const { data } = getRequestParams<Params>({
            ctx: req,
            params: ['data'],
        });

        const user = await userQueries.createUser(data).catch((error) => {
            throw new Error(`Error creating user: ${error}`);
        });

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error });
    }
};
