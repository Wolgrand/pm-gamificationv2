import {NextApiRequest, NextApiResponse} from 'next'
import { ObjectID } from 'mongodb';
import {UserSuccessResponseType, ErrorResponseType} from '../../../interfaces/interfaces'
import connect from '../../../utils/database';


export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | UserSuccessResponseType>
): Promise<void> => {

  if (req.method === 'PUT') {

    const {
      name,
      department,
      company,
      email,
      position,
      score,
      multiply,
      role,
    }: {
      name: string;
      department: string;
      company: string;
      email: string;
      position: number;
      score: number;
      multiply: number;
      role: string;

    } = req.body;

      if (
        !name ||
        !department ||
        !company ||
        !email ||
        !role
        ) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }

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
        name,
        department,
        company,
        email,
        position,
        score,
        multiply,
        role,
      }});

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }


  }if (req.method === 'DELETE') {

    const id = req.query.id as string;

    const _id = new ObjectID(id);

    const { db } = await connect('users');

    const checkIfRewardExist = await db.findOne({ _id });
    if (!checkIfRewardExist) {
      res
        .status(400)
        .json({ error: `User not find` });
      return;
    }


    const response:any = await db.findOneAndDelete({ _id });

    res.status(200).json(response);
  }else if (req.method === 'GET') {

    const id = req.query.id as string;

    const _id = new ObjectID(id);

    const { db } = await connect('users');

    const response:any = await db.findOne({ _id });

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
