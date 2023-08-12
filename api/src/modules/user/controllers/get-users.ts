import { Request, Response } from 'express';
import { userQueries } from '@/modules/user/services';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userQueries.findUsers({}).catch((error) => {
            throw new Error(`Error creating user: ${error}`);
        });

        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ error });
    }
};
