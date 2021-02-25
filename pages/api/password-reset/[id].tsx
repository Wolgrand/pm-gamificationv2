import {NextApiRequest, NextApiResponse} from 'next'
import { ObjectID } from 'mongodb';
import {UserSuccessResponseType, ErrorResponseType} from '../../../interfaces/interfaces'
import connect from '../../../utils/database';
import { generateHash } from '../../../utils/providers/BCryptHashProvider';


export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | UserSuccessResponseType>
): Promise<void> => {

  if (req.method === 'PUT') {

    const {
      password,
    }: {
      password: string;

    } = req.body;

      if (
        !password
        ) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }

    const hashedPassword = await generateHash(password);

    const id = req.query.id as string;

    const _id = new ObjectID(id);

    const { db } = await connect('users');

    const checkIfUserExist = await db.findOne({ _id });
    if (!checkIfUserExist) {
      res
        .status(400)
        .json({ error: `User not find` });
      return;
    }

    try {
      const response:any = await db.findOneAndUpdate({_id}, {$set:{
        password: hashedPassword
      }});

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }


  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
