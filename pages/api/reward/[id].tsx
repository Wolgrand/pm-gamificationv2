import {NextApiRequest, NextApiResponse} from 'next'
import { ObjectID } from 'mongodb';
import {UserSuccessResponseType, ErrorResponseType} from '../../../interfaces/interfaces'
import connect from '../../../utils/database';


export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | UserSuccessResponseType>
): Promise<void> => {

  if (req.method === 'DELETE') {

    const id = req.query.id as string;

    const _id = new ObjectID(id);

    const { db } = await connect('rewards');

    const checkIfRewardExist = await db.findOne({ _id });
    if (!checkIfRewardExist) {
      res
        .status(400)
        .json({ error: `Reward not find` });
      return;
    }

    const response:any = await db.findOneAndDelete({ _id });

    res.status(200).json(response);
  }if (req.method === 'PUT') {

    const {
      title,
      score,
    }: {
      title: string;
      score: number;


    } = req.body;

      if (
        !title ||
        !score

        ) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }

    const id = req.query.id as string;

    const _id = new ObjectID(id);

    const { db } = await connect('rewards');

    try {
      const response:any = await db.findOneAndUpdate({_id}, {$set:{
        title,
        score,
      }});

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }


  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
