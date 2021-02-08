import {NextApiRequest, NextApiResponse} from 'next'
import { ObjectID } from 'mongodb';
import {UserSuccessResponseType, ErrorResponseType, AchievementData} from '../../../../interfaces/interfaces'
import connect from '../../../../utils/database';


export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | UserSuccessResponseType>
): Promise<void> => {

  if (req.method === 'PUT') {

    const {
      id,
      month,
      day,
      description,
      score,
    }: {
      id: string,
      month: number,
      day: number,
      description: string,
      score: number,
    } = req.body;


       if (
        !id ||
        !month ||
        !day ||
        !description ||
        !score
        ) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }

    const userId = req.query.id as string;

    const _id = new ObjectID(userId);

    const { db } = await connect('users');

    const checkIfUserExist = await db.findOne({ _id });
    if (!checkIfUserExist) {
      res
        .status(400)
        .json({ error: `User not find` });
      return;
    }

    try {
      const response:any = await db.findOneAndUpdate({_id}, {$push:{
        criterias:{
          id,
          month,
          day,
          description,
          score
        }
      }});

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }


  }if (req.method === 'DELETE') {

    const {
      id
    }: {
      id: string,
    } = req.body;

    const userId = req.query.id as string;

    const _id = new ObjectID(userId);

    const { db } = await connect('users');

    const checkIfUserExist = await db.findOne({ _id });
    if (!checkIfUserExist) {
      res
        .status(400)
        .json({ error: `User not find` });
      return;
    }

    const filterCriterias = checkIfUserExist.criterias.filter((item:any)=>{
     return item.id !== id
    })

     const response:any = await db.findOneAndUpdate({_id}, {$set:{
      criterias: filterCriterias
    }});



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
