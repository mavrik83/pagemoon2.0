import { Request, Response } from 'express';
import { userQueries } from '@/modules/user/services';
import { getRequestParams } from '@/utils/get-req-params';

interface Params {
    id: string;
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = getRequestParams<Params>({
            ctx: req,
            params: ['id'],
        });

        const user = await userQueries.deleteUser({ id }).catch((error) => {
            throw new Error(`Error fetching user: ${error}`);
        });

        if (!user) {
            throw new Error(`User not found`);
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(`${error}`);
    }
};
